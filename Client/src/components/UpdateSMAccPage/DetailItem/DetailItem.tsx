export default function DetailItem({ label, value }) {
  return (
    <div>
      <p className="text-sm capitalize  text-[--text-color]">{label}</p>
      <p className="font-semibold capitalize text-[--text-color]">{value}</p>
    </div>
  );
}
