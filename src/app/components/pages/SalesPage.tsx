// Sales & Inventory Page Component
import { Card } from '@/app/components/design-system/Card';
import { Button } from '@/app/components/design-system/Button';
import { Input } from '@/app/components/design-system/Input';
import { DollarSign, Package, TrendingUp, TrendingDown } from 'lucide-react';

export function SalesPage() {
  const expenses = [
    { date: '2026-01-18', category: 'Rent', amount: 2500, description: 'Monthly rent payment' },
    { date: '2026-01-15', category: 'Utilities', amount: 380, description: 'Electricity and water' },
    { date: '2026-01-12', category: 'Supplies', amount: 450, description: 'Hair products restock' },
    { date: '2026-01-10', category: 'Staff', amount: 3200, description: 'Staff salaries - Week 2' },
  ];

  const inventory = [
    { item: 'Hair Color - Black', quantity: 24, unit: 'tubes', reorderLevel: 10, status: 'good' },
    { item: 'Hair Color - Brown', quantity: 18, unit: 'tubes', reorderLevel: 10, status: 'good' },
    { item: 'Shampoo - Professional', quantity: 8, unit: 'bottles', reorderLevel: 12, status: 'low' },
    { item: 'Conditioner - Professional', quantity: 6, unit: 'bottles', reorderLevel: 12, status: 'low' },
    { item: 'Nail Polish Set', quantity: 45, unit: 'units', reorderLevel: 20, status: 'good' },
    { item: 'Facial Cream', quantity: 3, unit: 'jars', reorderLevel: 8, status: 'critical' },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Sales & Inventory</h1>

      {/* P&L Summary */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-2">Total Revenue</div>
              <div className="text-2xl font-bold text-gray-800">$58,450</div>
              <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp size={12} />
                +12% vs last month
              </div>
            </div>
            <DollarSign className="text-gray-400" />
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-2">Total Expenses</div>
              <div className="text-2xl font-bold text-gray-800">$24,120</div>
              <div className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <TrendingUp size={12} />
                +5% vs last month
              </div>
            </div>
            <DollarSign className="text-gray-400" />
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-2">Net Profit</div>
              <div className="text-2xl font-bold text-green-700">$34,330</div>
              <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp size={12} />
                +18% vs last month
              </div>
            </div>
            <TrendingUp className="text-green-600" />
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-2">Profit Margin</div>
              <div className="text-2xl font-bold text-gray-800">58.7%</div>
              <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp size={12} />
                +3.2% vs last month
              </div>
            </div>
            <TrendingUp className="text-green-600" />
          </div>
        </Card>
      </div>

      {/* Expenses Table */}
      <Card title="Recent Expenses">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-600">Total This Month: <span className="font-semibold text-gray-800">$6,530</span></div>
          <Button variant="primary" size="small">+ Add Expense</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Category</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Description</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-700">{expense.date}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className="px-2 py-1 bg-gray-100 border border-gray-300 text-gray-700 text-xs">
                      {expense.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">{expense.description}</td>
                  <td className="py-3 px-4 text-sm text-right font-semibold text-red-600">-${expense.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Inventory Management */}
      <Card title="Inventory Status">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4 text-sm">
            <div>
              <span className="w-3 h-3 inline-block bg-green-500 mr-1"></span>
              <span className="text-gray-600">Good Stock</span>
            </div>
            <div>
              <span className="w-3 h-3 inline-block bg-yellow-500 mr-1"></span>
              <span className="text-gray-600">Low Stock</span>
            </div>
            <div>
              <span className="w-3 h-3 inline-block bg-red-500 mr-1"></span>
              <span className="text-gray-600">Critical</span>
            </div>
          </div>
          <Button variant="primary" size="small">+ Add Item</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Item</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Quantity</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Reorder Level</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800">{item.item}</td>
                  <td className="py-3 px-4 text-sm text-center">
                    <span className="font-semibold text-gray-800">{item.quantity}</span>
                    <span className="text-gray-500 text-xs ml-1">{item.unit}</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-center text-gray-700">{item.reorderLevel}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-3 py-1 text-xs border ${
                      item.status === 'good' ? 'bg-green-100 border-green-400 text-green-800' :
                      item.status === 'low' ? 'bg-yellow-100 border-yellow-400 text-yellow-800' :
                      'bg-red-100 border-red-400 text-red-800'
                    }`}>
                      {item.status === 'good' ? 'Good Stock' :
                       item.status === 'low' ? 'Low Stock' :
                       'Critical'}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="secondary" size="small">Restock</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
