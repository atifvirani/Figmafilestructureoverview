// Dashboard Page Component
import { Card } from '@/app/components/design-system/Card';
import { TrendingUp, DollarSign, Users } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>

      {/* Metric Cards */}
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-2">Sales Today</div>
              <div className="text-3xl font-bold text-gray-800">$2,450</div>
              <div className="text-xs text-green-600 mt-1">↑ 12% from yesterday</div>
            </div>
            <div className="w-12 h-12 border-2 border-gray-300 bg-gray-100 flex items-center justify-center">
              <DollarSign className="text-gray-600" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-2">Profit Today</div>
              <div className="text-3xl font-bold text-gray-800">$1,820</div>
              <div className="text-xs text-green-600 mt-1">↑ 8% from yesterday</div>
            </div>
            <div className="w-12 h-12 border-2 border-gray-300 bg-gray-100 flex items-center justify-center">
              <TrendingUp className="text-gray-600" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-2">Customers Today</div>
              <div className="text-3xl font-bold text-gray-800">38</div>
              <div className="text-xs text-gray-500 mt-1">↓ 3% from yesterday</div>
            </div>
            <div className="w-12 h-12 border-2 border-gray-300 bg-gray-100 flex items-center justify-center">
              <Users className="text-gray-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Analytics Panel */}
      <Card title="Analytics">
        <div className="space-y-4">
          {/* Chart Placeholder */}
          <div className="h-64 border-2 border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-2">📊</div>
              <div>Revenue Chart Placeholder</div>
            </div>
          </div>

          {/* Comparison Data */}
          <div className="grid grid-cols-4 gap-4 pt-4 border-t-2 border-gray-200">
            <div>
              <div className="text-xs text-gray-500">This Week</div>
              <div className="text-lg font-semibold text-gray-800">$14,280</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">This Month</div>
              <div className="text-lg font-semibold text-gray-800">$58,450</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Last Month</div>
              <div className="text-lg font-semibold text-gray-800">$52,120</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Growth</div>
              <div className="text-lg font-semibold text-green-600">+12.1%</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-6">
        <Card title="Top Services Today">
          <div className="space-y-3">
            {['Haircut & Styling', 'Hair Coloring', 'Manicure', 'Facial Treatment'].map((service, idx) => (
              <div key={idx} className="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span className="text-sm text-gray-700">{service}</span>
                <span className="font-semibold text-gray-800">{12 - idx * 2}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Active Staff">
          <div className="space-y-3">
            {['Sarah Johnson', 'Mike Chen', 'Emily Rodriguez', 'David Kim'].map((staff, idx) => (
              <div key={idx} className="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <span className="text-sm text-gray-700">{staff}</span>
                <span className="px-2 py-1 bg-green-200 text-green-800 text-xs border border-gray-400">
                  {idx === 0 ? '3 clients' : idx === 1 ? '2 clients' : '1 client'}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
