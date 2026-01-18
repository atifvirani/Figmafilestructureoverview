// CRM Page Component
import { Card } from '@/app/components/design-system/Card';
import { Button } from '@/app/components/design-system/Button';
import { SearchInput } from '@/app/components/design-system/Input';
import { Star, Phone, Mail } from 'lucide-react';

function CustomerCard({ name, phone, email, visits, totalSpent, vip }: {
  name: string;
  phone: string;
  email: string;
  visits: number;
  totalSpent: number;
  vip: boolean;
}) {
  return (
    <div className="border-2 border-gray-300 bg-white p-4 hover:border-gray-400 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="font-semibold text-gray-800 flex items-center gap-2">
            {name}
            {vip && (
              <span className="px-2 py-0.5 bg-yellow-200 text-yellow-900 text-xs border border-yellow-400 flex items-center gap-1">
                <Star size={12} fill="currentColor" />
                VIP
              </span>
            )}
          </div>
          <div className="text-sm text-gray-600 mt-1 flex items-center gap-1">
            <Phone size={14} />
            {phone}
          </div>
          <div className="text-sm text-gray-600 mt-1 flex items-center gap-1">
            <Mail size={14} />
            {email}
          </div>
        </div>
      </div>

      <div className="flex gap-4 py-3 border-y-2 border-gray-200 my-3">
        <div>
          <div className="text-xs text-gray-500">Total Visits</div>
          <div className="text-lg font-bold text-gray-800">{visits}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">Total Spent</div>
          <div className="text-lg font-bold text-gray-800">${totalSpent}</div>
        </div>
      </div>

      <Button variant="secondary" size="small" fullWidth>View Details</Button>
    </div>
  );
}

export function CRMPage() {
  const customers = [
    { name: 'Jane Smith', phone: '(555) 123-4567', email: 'jane@email.com', visits: 24, totalSpent: 2450, vip: true },
    { name: 'Michael Brown', phone: '(555) 234-5678', email: 'michael@email.com', visits: 18, totalSpent: 1820, vip: true },
    { name: 'Sarah Davis', phone: '(555) 345-6789', email: 'sarah@email.com', visits: 12, totalSpent: 980, vip: false },
    { name: 'Robert Wilson', phone: '(555) 456-7890', email: 'robert@email.com', visits: 8, totalSpent: 650, vip: false },
    { name: 'Emily Johnson', phone: '(555) 567-8901', email: 'emily@email.com', visits: 15, totalSpent: 1450, vip: true },
    { name: 'David Lee', phone: '(555) 678-9012', email: 'david@email.com', visits: 6, totalSpent: 420, vip: false },
  ];

  const vipCount = customers.filter(c => c.vip).length;
  const totalCustomers = customers.length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Customer Relationship Management</h1>
        <Button variant="primary" size="medium">+ Add Customer</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <div className="text-sm text-gray-500 mb-1">Total Customers</div>
          <div className="text-2xl font-bold text-gray-800">{totalCustomers}</div>
        </Card>
        <Card>
          <div className="text-sm text-gray-500 mb-1 flex items-center gap-1">
            <Star size={14} fill="currentColor" className="text-yellow-600" />
            VIP Customers
          </div>
          <div className="text-2xl font-bold text-gray-800">{vipCount}</div>
        </Card>
        <Card>
          <div className="text-sm text-gray-500 mb-1">This Month</div>
          <div className="text-2xl font-bold text-gray-800">142</div>
        </Card>
        <Card>
          <div className="text-sm text-gray-500 mb-1">New This Week</div>
          <div className="text-2xl font-bold text-gray-800">8</div>
        </Card>
      </div>

      {/* Search & Filters */}
      <Card>
        <div className="flex gap-4 items-center">
          <SearchInput placeholder="Search customers..." />
          <Button variant="secondary" size="medium">All Customers</Button>
          <Button variant="secondary" size="medium">VIP Only</Button>
          <Button variant="secondary" size="medium">Inactive</Button>
        </div>
      </Card>

      {/* Customer List */}
      <div className="grid grid-cols-3 gap-4">
        {customers.map((customer, idx) => (
          <CustomerCard key={idx} {...customer} />
        ))}
      </div>

      {/* VIP Criteria Info */}
      <Card>
        <div className="flex gap-3 text-sm">
          <span className="text-yellow-600 text-xl">
            <Star size={20} fill="currentColor" />
          </span>
          <div className="text-gray-600">
            <strong>VIP Criteria:</strong> Customers with 15+ visits or $1,500+ total spend automatically receive VIP status with exclusive benefits and discounts.
          </div>
        </div>
      </Card>
    </div>
  );
}
