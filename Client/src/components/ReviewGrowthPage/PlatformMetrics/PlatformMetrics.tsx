import {
  fixedLabels,
  platformIcons,
  platformMetrics,
} from "../../../DB/Context";
import MetricBadge from "../MetricBadge/MetricBadge";

export default function PlatformMetrics({ metrics }) {
  const IconBadge = platformIcons[metrics.acc_platform];
  const plaformMetrics = platformMetrics[metrics.acc_platform];
  return (
    <div className="p-4 bg-[--bg-color] text-[--text-color] rounded-lg">
      <div className="flex items-center space-x-2 mb-3">
        {IconBadge}
        <span className="font-medium capitalize">{metrics.acc_platform}</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {plaformMetrics.map((metric) => (
          <MetricBadge
            key={metric}
            label={fixedLabels[metric] || metric}
            value={metrics[metric] || 0}
          />
        ))}
      </div>
    </div>
  );
}
