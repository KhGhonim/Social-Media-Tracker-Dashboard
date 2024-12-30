import { IoIosClose } from "react-icons/io";

export default function SelectedPhotos({ photos, onRemove }) {
  if (photos.length === 0) return null;

  return (
    <div className="space-y-2">
      <h3 className="text-white font-medium">
        Selected Photos ({photos.length})
      </h3>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {photos.map((photo) => (
          <div key={photo.id} className="relative flex-shrink-0 w-24 h-24">
            <img
              src={photo.screenshot}
              alt={photo.username}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => onRemove(photo)}
              className="absolute top-0 -right-1 p-1 rounded-full bg-red-500 text-white"
            >
              <IoIosClose size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
