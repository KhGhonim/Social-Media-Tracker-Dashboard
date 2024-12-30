export default function MetricBadge({ label, value }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-xs text-gray-500">{label}</span>
      <div className="flex items-center space-x-1">
        <span className="font-medium">{value}</span>
      </div>
    </div>
  );
}
