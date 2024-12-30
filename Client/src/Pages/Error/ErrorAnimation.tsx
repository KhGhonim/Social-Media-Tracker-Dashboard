
export default function ErrorAnimation() {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <div className="absolute inset-0">
        <div className="w-full h-full rounded-full border-8 border-indigo-200 border-dashed animate-spin-slow"></div>
      </div>
      <div className="absolute inset-4">
        <div className="w-full h-full rounded-full border-8 border-indigo-300 border-dashed animate-reverse-spin"></div>
      </div>
      <div className="absolute inset-8">
        <div className="w-full h-full rounded-full border-8 border-indigo-400 border-dashed animate-spin-slow"></div>
      </div>
    </div>
  );
}
