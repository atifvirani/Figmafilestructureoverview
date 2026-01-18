// Chairs Management Page - Most Important Component
import { Card } from '@/app/components/design-system/Card';
import { StatusBadge } from '@/app/components/design-system/StatusBadge';
import { Button } from '@/app/components/design-system/Button';
import { Clock } from 'lucide-react';

interface ChairBlockProps {
  chairNumber: number;
  status: 'empty' | 'occupied' | 'completed';
  serviceName?: string;
  staffName?: string;
  startTime?: string;
  timer?: string;
}

function ChairBlock({ chairNumber, status, serviceName, staffName, startTime, timer }: ChairBlockProps) {
  return (
    <Card className="hover:border-gray-400 transition-colors">
      <div className="space-y-3">
        {/* Chair Number & Status */}
        <div className="flex justify-between items-start">
          <div className="text-xl font-bold text-gray-800">Chair {chairNumber}</div>
          <StatusBadge status={status} />
        </div>

        {/* Service Details */}
        {status !== 'empty' && (
          <div className="space-y-2 py-3 border-y-2 border-gray-200">
            <div>
              <div className="text-xs text-gray-500">Service</div>
              <div className="text-sm font-semibold text-gray-800">{serviceName || 'N/A'}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Staff</div>
              <div className="text-sm font-semibold text-gray-800">{staffName || 'N/A'}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Start Time</div>
              <div className="text-sm font-semibold text-gray-800">{startTime || 'N/A'}</div>
            </div>
          </div>
        )}

        {/* Timer */}
        {status === 'occupied' && (
          <div className="flex items-center gap-2 bg-yellow-50 border-2 border-yellow-200 p-2">
            <Clock size={16} className="text-gray-600" />
            <div className="text-sm font-mono font-semibold text-gray-800">{timer || '00:00:00'}</div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2">
          {status === 'empty' && (
            <Button variant="primary" size="medium" fullWidth>Assign Customer</Button>
          )}
          {status === 'occupied' && (
            <Button variant="secondary" size="medium" fullWidth>Mark Complete</Button>
          )}
          {status === 'completed' && (
            <Button variant="primary" size="medium" fullWidth>Generate Bill</Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export function ChairsPage() {
  const chairs = [
    { id: 1, status: 'occupied' as const, serviceName: 'Haircut & Styling', staffName: 'Sarah Johnson', startTime: '10:30 AM', timer: '00:45:23' },
    { id: 2, status: 'empty' as const },
    { id: 3, status: 'completed' as const, serviceName: 'Hair Coloring', staffName: 'Mike Chen', startTime: '09:15 AM', timer: '02:15:00' },
    { id: 4, status: 'occupied' as const, serviceName: 'Manicure', staffName: 'Emily Rodriguez', startTime: '11:00 AM', timer: '00:20:15' },
    { id: 5, status: 'empty' as const },
    { id: 6, status: 'occupied' as const, serviceName: 'Facial Treatment', staffName: 'David Kim', startTime: '10:00 AM', timer: '01:05:40' },
    { id: 7, status: 'empty' as const },
    { id: 8, status: 'completed' as const, serviceName: 'Pedicure', staffName: 'Sarah Johnson', startTime: '09:00 AM', timer: '01:30:00' },
  ];

  const stats = {
    total: chairs.length,
    occupied: chairs.filter(c => c.status === 'occupied').length,
    empty: chairs.filter(c => c.status === 'empty').length,
    completed: chairs.filter(c => c.status === 'completed').length,
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Chairs Management</h1>
        <div className="flex gap-4 text-sm">
          <div className="px-4 py-2 border-2 border-gray-300 bg-white">
            <span className="text-gray-500">Total: </span>
            <span className="font-semibold text-gray-800">{stats.total}</span>
          </div>
          <div className="px-4 py-2 border-2 border-yellow-300 bg-yellow-50">
            <span className="text-gray-500">Occupied: </span>
            <span className="font-semibold text-gray-800">{stats.occupied}</span>
          </div>
          <div className="px-4 py-2 border-2 border-gray-300 bg-gray-50">
            <span className="text-gray-500">Empty: </span>
            <span className="font-semibold text-gray-800">{stats.empty}</span>
          </div>
          <div className="px-4 py-2 border-2 border-green-300 bg-green-50">
            <span className="text-gray-500">Completed: </span>
            <span className="font-semibold text-gray-800">{stats.completed}</span>
          </div>
        </div>
      </div>

      {/* Chairs Grid */}
      <div className="grid grid-cols-4 gap-6">
        {chairs.map((chair) => (
          <ChairBlock
            key={chair.id}
            chairNumber={chair.id}
            status={chair.status}
            serviceName={chair.serviceName}
            staffName={chair.staffName}
            startTime={chair.startTime}
            timer={chair.timer}
          />
        ))}
      </div>
    </div>
  );
}
