import { useState } from "react";
import { PDFDocument, rgb } from 'pdf-lib';
import toast from "react-hot-toast";
import PalastineTemplate from '/Templates/Palestine Weekly Report.pdf'
import ArabicFonts from '/font/Cairo-Regular.ttf'
import fontkit from '@pdf-lib/fontkit';
import { cloud_name, GenerateReport, ServerUrl } from "../../Keys/envKeys";
import { useAppSelector } from "../../Hooks/ReduxHooks";
import { UserCurrentStatus } from "../../types/types";
import { reports } from "../../DB/Context";

const useReportGenerator = () => {
  const [GenerateReportsForm, setGenerateReportsForm] = useState({
    reportType: "",
    reportDescription: "",
  });
  const [Isloading, setIsloading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const { userCurrentStatus }: { userCurrentStatus: UserCurrentStatus } =
    useAppSelector((state) => state.user);

  const HandleChange = (eo) => {
    setGenerateReportsForm({ ...GenerateReportsForm, [eo.target.name]: eo.target.value });
  }
  const handlePhotoSelect = (photo) => {
    setPhotos((prev) => {
      const isSelected = prev?.some((p) => p.id === photo.id);
      if (isSelected) {
        return prev?.filter((p) => p.id !== photo.id);
      }
      return [...prev, photo];
    });
  };

  const loadTemplateAndInsertPhotos = async () => {
    const template = GenerateReportsForm.reportType === 'PalestineWeeklyReport' ? PalastineTemplate : ''
    const pdfTemplateBytes = await fetch(`${template}`).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(pdfTemplateBytes);

    const pages = pdfDoc.getPages();

    const firstPage = pages[0];
    const SecoundPage = pages[1];
    const ThirdPage = pages[2];

    pdfDoc.registerFontkit(fontkit);

    const fontBytes = await fetch(ArabicFonts).then(res => res.arrayBuffer());
    const font = await pdfDoc.embedFont(fontBytes);

    const { width, height } = firstPage.getSize();

    if (GenerateReportsForm.reportType === 'PalestineWeeklyReport') {
      const layoutConfig = reports.PalestineWeeklyReport[0];

      firstPage.drawText(GenerateReportsForm.reportDescription, {
        x: width - layoutConfig.x,
        y: height - layoutConfig.y,
        size: 12,
        font,
        color: rgb(0, 0, 0),
        maxWidth: 600,
        wordBreaks: [' '],
      });

      const firstPageLayouts = layoutConfig.photoLayouts.slice(0, 3);
      const secondPageLayouts = layoutConfig.photoLayouts.slice(3, 12);
      const thirdPageLayouts = layoutConfig.photoLayouts.slice(12, 21);

      // First Page for Photos
      for (let i = 0; i < Math.min(photos.length, firstPageLayouts.length); i++) {
        try {
          const photoUrl = photos[i];
          const layout = firstPageLayouts[i];
          const response = await fetch(photoUrl.screenshot);
          const imageBytes = await response.arrayBuffer();
          const image = await pdfDoc.embedPng(imageBytes);

          firstPage.drawImage(image, {
            x: layout.x,
            y: height - layout.y,
            width: layout.width,
            height: layout.height,
          });


        } catch (error) {
          toast.error(`Failed to add photo ${i + 1}: ${error}`);
          return;
        }
      }

      // Secound Page for Photos
      for (let i = 3; i < Math.min(photos.length, 12); i++) {
        try {
          const photoUrl = photos[i];
          const layout = secondPageLayouts[i - 3];;
          const response = await fetch(photoUrl.screenshot);
          const imageBytes = await response.arrayBuffer();
          const image = await pdfDoc.embedPng(imageBytes);

          SecoundPage.drawImage(image, {
            x: layout.x,
            y: height - layout.y,
            width: layout.width,
            height: layout.height,
          });


        } catch (error) {
          toast.error(`Failed to add photo ${i + 1}: ${error}`);
          return;
        }
      }

      // Third Page for photos
      for (let i = 12; i < Math.min(photos.length, 21); i++) {
        try {
          const photoUrl = photos[i];
          const layout = thirdPageLayouts[i - 12];;
          const response = await fetch(photoUrl.screenshot);
          const imageBytes = await response.arrayBuffer();
          const image = await pdfDoc.embedPng(imageBytes);

          ThirdPage.drawImage(image, {
            x: layout.x,
            y: height - layout.y,
            width: layout.width,
            height: layout.height,
          });


        } catch (error) {
          toast.error(`Failed to add photo ${i + 1}: ${error}`);
          return;
        }
      }
    }

    const modifiedPdfBytes = await pdfDoc.save();
    return new Blob([modifiedPdfBytes], { type: 'application/pdf' });
  };



  
  const HandleSubmit = async (eo) => {
    eo.preventDefault();
    setIsloading(true);
    if (photos.length === 0) {
      toast.error('Please select photos to insert into the PDF.');
      return;
    }


    if (!GenerateReportsForm.reportType || !GenerateReportsForm.reportDescription) {
      toast.error('Please fill in all required fields.');
      setIsloading(false);
      return

    }
    const pdfBlob = await loadTemplateAndInsertPhotos();


    if (!pdfBlob) {
      toast.error('PDF generation failed');
      return
    }


    try {
      const formData = new FormData();
      formData.append('file', pdfBlob, `${GenerateReportsForm.reportType}.pdf`);
      formData.append('upload_preset', `Ghonim`);
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/raw/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );


      if (!res.ok) {
        toast.error('PDF upload failed');
        return
      }
      const data = await res.json();

      try {

        const QueryParams = new URLSearchParams({
          reportType: GenerateReportsForm.reportType,
          reportDescription: GenerateReportsForm.reportDescription,
          ReportURL: data.secure_url,
          userID: userCurrentStatus.user.id.toString(),
          userName: userCurrentStatus.user.name,
          projects: JSON.stringify(userCurrentStatus.user.projects)
        })
        const res = await fetch(`${ServerUrl}${GenerateReport}?${QueryParams}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include'
        });
        if (res.status === 429) {
          const retryAfter = res.headers.get('retry-after');
          const minutes = retryAfter ? Math.ceil(parseInt(retryAfter) / 60) : 15;

          toast.error(
            `Too many requests. Please try again in ${minutes} minutes.`
          );
          return;
        }
        const DB = await res.json();
        if (!res.ok) {
          toast.error(DB.message);
          return
        }
        toast.success('Report saved successfully');
      } catch (error) {
        console.error('PDF upload failed', error);
        toast.error(data.message);
        return

      }
    } catch (error) {
      console.error('PDF upload failed', error);
      toast.error('PDF upload failed');
      return
    } finally {
      setIsloading(false);
    }

  }
  return { HandleSubmit, GenerateReportsForm, setPhotos, Isloading, handlePhotoSelect, HandleChange, photos }
}

export default useReportGenerator