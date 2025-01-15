import PhotoCard from "./PhotoCard/PhotoCard";

export default function PhotoGrid({ photos, selectedPhotos, onPhotoSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos?.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isSelected={selectedPhotos.some((p) => p.id === photo.id)}
          onSelect={onPhotoSelect}
        />
      ))}
    </div>
  );
}
