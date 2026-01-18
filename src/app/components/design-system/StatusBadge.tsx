// Design System: Status Badge

interface StatusBadgeProps {
  status: 'empty' | 'occupied' | 'completed';
  size?: 'small' | 'medium' | 'large';
}

export function StatusBadge({ status, size = 'medium' }: StatusBadgeProps) {
  const statusConfig = {
    empty: { bg: 'bg-gray-200', text: 'text-gray-700', label: 'Empty' },
    occupied: { bg: 'bg-yellow-200', text: 'text-yellow-900', label: 'Occupied' },
    completed: { bg: 'bg-green-200', text: 'text-green-900', label: 'Completed' }
  };
  
  const sizes = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base'
  };
  
  const config = statusConfig[status];
  
  return (
    <span className={`${config.bg} ${config.text} ${sizes[size]} border-2 border-gray-400 inline-block font-medium`}>
      {config.label}
    </span>
  );
}
