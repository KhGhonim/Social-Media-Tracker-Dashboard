import { TbTrendingUp } from 'react-icons/tb'

export default function MetricsCell({metrics}) {
  return (
    <div className="space-y-2">
      {metrics.map((metric, idx) => (
        <div key={idx} className="flex items-center space-x-2">
          <TbTrendingUp  className="h-4 w-4 text-green-500" />
          <span className="text-sm text-gray-600">{metric.category}:</span>
          <span className="text-sm font-medium text-gray-900">
            {metric.current} / {metric.target} ({metric.improvement}% growth)
          </span>
        </div>
      ))}
    </div>

  )
}
