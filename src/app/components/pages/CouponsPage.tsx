// Coupons Page Component
import { Card } from '@/app/components/design-system/Card';
import { Button } from '@/app/components/design-system/Button';
import { Input } from '@/app/components/design-system/Input';
import { Dropdown } from '@/app/components/design-system/Dropdown';
import { Tag, TrendingDown, TrendingUp } from 'lucide-react';

export function CouponsPage() {
  const coupons = [
    { code: 'SUMMER20', type: 'Percentage', value: 20, uses: 45, revenue: 2850, loss: 712, status: 'active' },
    { code: 'NEWCLIENT', type: 'Fixed Amount', value: 10, uses: 28, revenue: 1540, loss: 280, status: 'active' },
    { code: 'VIP15', type: 'Percentage', value: 15, uses: 67, revenue: 4250, loss: 750, status: 'active' },
    { code: 'HOLIDAY25', type: 'Percentage', value: 25, uses: 12, revenue: 680, loss: 227, status: 'expired' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Coupons Management</h1>
        <Button variant="primary" size="medium">+ Create Coupon</Button>
      </div>

      {/* Analytics Summary */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <div className="text-sm text-gray-500 mb-2">Active Coupons</div>
          <div className="text-2xl font-bold text-gray-800">
            {coupons.filter(c => c.status === 'active').length}
          </div>
        </Card>
        <Card>
          <div className="text-sm text-gray-500 mb-2">Total Uses</div>
          <div className="text-2xl font-bold text-gray-800">
            {coupons.reduce((sum, c) => sum + c.uses, 0)}
          </div>
        </Card>
        <Card>
          <div className="text-sm text-gray-500 mb-2 flex items-center gap-1">
            <TrendingUp size={14} className="text-green-600" />
            Revenue Impact
          </div>
          <div className="text-2xl font-bold text-green-700">
            ${coupons.reduce((sum, c) => sum + c.revenue, 0).toLocaleString()}
          </div>
        </Card>
        <Card>
          <div className="text-sm text-gray-500 mb-2 flex items-center gap-1">
            <TrendingDown size={14} className="text-red-600" />
            Discount Loss
          </div>
          <div className="text-2xl font-bold text-red-700">
            ${coupons.reduce((sum, c) => sum + c.loss, 0).toLocaleString()}
          </div>
        </Card>
      </div>

      {/* Coupons List */}
      <Card title="All Coupons">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Coupon Code</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Value</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Uses</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Revenue</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Loss</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Tag size={16} className="text-gray-400" />
                      <span className="font-mono font-semibold text-gray-800">{coupon.code}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">{coupon.type}</td>
                  <td className="py-3 px-4 text-sm text-center font-semibold text-gray-800">
                    {coupon.type === 'Percentage' ? `${coupon.value}%` : `$${coupon.value}`}
                  </td>
                  <td className="py-3 px-4 text-sm text-center text-gray-700">{coupon.uses}</td>
                  <td className="py-3 px-4 text-sm text-right font-semibold text-green-700">${coupon.revenue}</td>
                  <td className="py-3 px-4 text-sm text-right font-semibold text-red-700">-${coupon.loss}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-3 py-1 text-xs border ${
                      coupon.status === 'active' 
                        ? 'bg-green-100 border-green-400 text-green-800' 
                        : 'bg-gray-100 border-gray-400 text-gray-700'
                    }`}>
                      {coupon.status === 'active' ? 'Active' : 'Expired'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="secondary" size="small">Edit</Button>
                      <Button variant="danger" size="small">Delete</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Create Coupon Form */}
      <Card title="Create New Coupon">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Coupon Code</label>
            <Input placeholder="e.g., SPRING25" fullWidth />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Discount Type</label>
            <Dropdown options={['Percentage', 'Fixed Amount']} placeholder="Select type" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Discount Value</label>
            <Input type="number" placeholder="e.g., 20" fullWidth />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Valid Until</label>
            <Input type="text" placeholder="YYYY-MM-DD" fullWidth />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Max Uses (Optional)</label>
            <Input type="number" placeholder="Leave empty for unlimited" fullWidth />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Minimum Purchase (Optional)</label>
            <Input type="number" placeholder="e.g., 50" fullWidth />
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Button variant="primary" size="medium">Create Coupon</Button>
          <Button variant="secondary" size="medium">Cancel</Button>
        </div>
      </Card>

      {/* Analytics Note */}
      <Card>
        <div className="flex gap-3 text-sm">
          <span className="text-gray-600">📊</span>
          <div className="text-gray-600">
            <strong>Revenue Impact:</strong> Total sales generated using coupons. 
            <strong className="ml-2">Loss %:</strong> Calculated as (Total Discount / Revenue) × 100. Monitor this to ensure profitability.
          </div>
        </div>
      </Card>
    </div>
  );
}
