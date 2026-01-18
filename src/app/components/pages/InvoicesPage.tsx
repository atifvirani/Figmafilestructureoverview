// Invoices Page Component
import { Card } from '@/app/components/design-system/Card';
import { Button } from '@/app/components/design-system/Button';
import { Input } from '@/app/components/design-system/Input';
import { FileText } from 'lucide-react';

export function InvoicesPage() {
  const invoices = [
    { id: 'INV-001', date: '2026-01-18', time: '10:30 AM', customer: 'Jane Smith', amount: 110, status: 'today' },
    { id: 'INV-002', date: '2026-01-18', time: '11:45 AM', customer: 'Michael Brown', amount: 75, status: 'today' },
    { id: 'INV-003', date: '2026-01-18', time: '02:15 PM', customer: 'Sarah Davis', amount: 145, status: 'today' },
    { id: 'INV-004', date: '2026-01-17', time: '03:30 PM', customer: 'Robert Wilson', amount: 95, status: 'past' },
    { id: 'INV-005', date: '2026-01-17', time: '04:00 PM', customer: 'Emily Johnson', amount: 180, status: 'past' },
    { id: 'INV-006', date: '2026-01-16', time: '11:00 AM', customer: 'David Lee', amount: 65, status: 'past' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Invoices</h1>
        <div className="flex gap-3">
          <Input type="text" placeholder="Search invoices..." />
          <Button variant="secondary" size="medium">Export</Button>
        </div>
      </div>

      {/* Date Filter */}
      <Card>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">Filter by Date:</div>
          <div className="flex gap-2">
            <Button variant="primary" size="small">Today</Button>
            <Button variant="secondary" size="small">Yesterday</Button>
            <Button variant="secondary" size="small">This Week</Button>
            <Button variant="secondary" size="small">This Month</Button>
            <Button variant="secondary" size="small">Custom Range</Button>
          </div>
        </div>
      </Card>

      {/* Invoices Table */}
      <Card title="Daily Invoices">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Invoice ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Time</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-gray-400" />
                      <span className="font-mono font-semibold text-gray-800">{invoice.id}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">{invoice.date}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{invoice.time}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{invoice.customer}</td>
                  <td className="py-3 px-4 text-sm text-right font-semibold text-gray-800">
                    ${invoice.amount.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="secondary" size="small">View</Button>
                      {invoice.status === 'today' && (
                        <Button variant="secondary" size="small">Edit</Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-6 pt-4 border-t-2 border-gray-300 flex justify-between">
          <div className="text-sm text-gray-600">Total Invoices: <span className="font-semibold text-gray-800">{invoices.length}</span></div>
          <div className="text-sm text-gray-600">Total Amount: <span className="font-semibold text-gray-800">${invoices.reduce((sum, inv) => sum + inv.amount, 0).toFixed(2)}</span></div>
        </div>
      </Card>

      {/* Info Note */}
      <Card>
        <div className="flex gap-3 text-sm">
          <span className="text-gray-600">ℹ️</span>
          <div className="text-gray-600">
            <strong>Note:</strong> Past invoices are view-only. Today's invoices can be viewed and edited.
          </div>
        </div>
      </Card>
    </div>
  );
}
