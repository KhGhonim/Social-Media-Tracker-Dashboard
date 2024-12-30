import { useState } from "react";
import SelectedPhotos from "./SelectedPhotos/SelectedPhotos";
import PhotoGrid from "./PhotoGrid/PhotoGrid";
import FetchPosts from "../../../Hooks/TeamsHooks/FetchPosts";
import { FaSpinner } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function PhotoSelector() {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const { FetchPostsTEData, FetchPostsTELoading } = FetchPosts();

  const handlePhotoSelect = (photo) => {
    setSelectedPhotos((prev) => {
      const isSelected = prev.some((p) => p.id === photo.id);
      if (isSelected) {
        return prev.filter((p) => p.id !== photo.id);
      }
      return [...prev, photo];
    });
  };

  const handlePhotoRemove = (photo) => {
    setSelectedPhotos((prev) => prev.filter((p) => p.id !== photo.id));
  };
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-[--text-color] mb-4 text-lg font-medium">
          {t("selectPhotosForReport")}{" "}
        </label>
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
            photos={FetchPostsTEData}
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
