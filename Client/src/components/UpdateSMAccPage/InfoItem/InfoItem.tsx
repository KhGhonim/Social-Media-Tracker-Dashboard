
export default function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center  text-[--text-color] gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-[--navbar]  text-[--allwhite] rounded-lg">
        {icon}
      </div>
      <div>
        <p className="text-sm ">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
