import SelectedPhotos from "./SelectedPhotos/SelectedPhotos";
import PhotoGrid from "./PhotoGrid/PhotoGrid";
import FetchPosts from "../../../Hooks/TeamsHooks/FetchPosts";
import { FaSpinner } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { MdOutlineDateRange } from "react-icons/md";

export default function PhotoSelector({
  selectedPhotos,
  setSelectedPhotos,
  handlePhotoSelect,
}) {
  const { FetchPostsTEData, FetchPostsTELoading } = FetchPosts();
  const handlePhotoRemove = (photo) => {
    setSelectedPhotos((prev) => prev.filter((p) => p.id !== photo.id));
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const startDateSQL = format(startDate, "yyyy-MM-dd");
  const endDateSQL = format(endDate, "yyyy-MM-dd");
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const filteredData = FetchPostsTEData.filter((item) => {
    const createdAt = format(item.created_at, "yyyy-MM-dd");
    return (
      (createdAt >= startDateSQL && createdAt <= endDateSQL) ||
      createdAt === startDateSQL ||
      createdAt === endDateSQL
    );
  });

  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <label className=" flex-1 text-[--text-color] mb-4 text-lg font-medium">
          {t("selectPhotosForReport")} <span className="text-red-500">*</span>
        </label>

        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          showMonthDropdown
          endDate={endDate}
          selectsRange
          closeOnScroll={true}
          maxDate={new Date()}
          toggleCalendarOnIconClick
          isClearable
          placeholderText={t("Select a date range")}
          showIcon
          className="w-60 p-2 border bg-[--bg-color] text-[--text-color] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--navbar] transition-all"
          icon={
            <MdOutlineDateRange
              size={24}
              className="mt-0.5 text-[--text-color]"
            />
          }
        />
      </div>

      {FetchPostsTELoading ? (
        <div className="flex w-full h-full items-center justify-center">
          <FaSpinner className="animate-spin" />
        </div>
      ) : FetchPostsTEData || FetchPostsTEData.length > 0 ? (
        <>
          <SelectedPhotos
            photos={selectedPhotos}
            onRemove={handlePhotoRemove}
          />

          <PhotoGrid
            photos={filteredData}
            selectedPhotos={selectedPhotos}
            onPhotoSelect={handlePhotoSelect}
          />
        </>
      ) : (
        <>
          <div className="flex w-full h-full items-center justify-center">
            <h2 className="text-2xl font-bold text-red-500">
              No Photos Found! Make sure your teams have uploaded their own
              achievements!
            </h2>
          </div>
        </>
      )}
    </div>
  );
}
