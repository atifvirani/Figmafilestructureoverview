// Services Page Component
import { Card } from '@/app/components/design-system/Card';
import { Button } from '@/app/components/design-system/Button';
import { Input } from '@/app/components/design-system/Input';
import { Dropdown } from '@/app/components/design-system/Dropdown';
import { Edit, Trash2 } from 'lucide-react';

export function ServicesPage() {
  const services = [
    { name: 'Haircut - Men', price: 25, productCost: 3, time: 30, category: 'Hair', profit: 22 },
    { name: 'Haircut - Women', price: 45, productCost: 5, time: 45, category: 'Hair', profit: 40 },
    { name: 'Hair Coloring', price: 120, productCost: 35, time: 120, category: 'Hair', profit: 85 },
    { name: 'Highlights', price: 95, productCost: 28, time: 90, category: 'Hair', profit: 67 },
    { name: 'Manicure', price: 30, productCost: 8, time: 45, category: 'Nails', profit: 22 },
    { name: 'Pedicure', price: 45, productCost: 12, time: 60, category: 'Nails', profit: 33 },
    { name: 'Basic Facial', price: 60, productCost: 15, time: 60, category: 'Facial', profit: 45 },
    { name: 'Deep Cleansing', price: 80, productCost: 22, time: 75, category: 'Facial', profit: 58 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Services Management</h1>
        <Button variant="primary" size="medium">+ Add Service</Button>
      </div>

      {/* Services Table */}
      <Card title="All Services">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Service Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Category</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Price</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Product Cost</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Profit</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Time (min)</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-semibold text-gray-800">{service.name}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className="px-2 py-1 bg-gray-100 border border-gray-300 text-gray-700 text-xs">
                      {service.category}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-right text-gray-700">${service.price}</td>
                  <td className="py-3 px-4 text-sm text-right text-gray-700">${service.productCost}</td>
                  <td className="py-3 px-4 text-sm text-right font-semibold text-green-700">${service.profit}</td>
                  <td className="py-3 px-4 text-sm text-center text-gray-700">{service.time}</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 hover:bg-gray-200 transition-colors">
                        <Edit size={16} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 transition-colors">
                        <Trash2 size={16} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Add/Edit Service Form */}
      <Card title="Add New Service">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Service Name</label>
            <Input placeholder="e.g., Premium Haircut" fullWidth />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Category</label>
            <Dropdown options={['Hair', 'Nails', 'Facial', 'Massage', 'Waxing']} placeholder="Select category" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Price ($)</label>
            <Input type="number" placeholder="0.00" fullWidth />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Product Cost ($)</label>
            <Input type="number" placeholder="0.00" fullWidth />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Time (minutes)</label>
            <Input type="number" placeholder="30" fullWidth />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Auto-Calculated Profit</label>
            <div className="border-2 border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 font-semibold">
              $0.00
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Button variant="primary" size="medium">Save Service</Button>
          <Button variant="secondary" size="medium">Cancel</Button>
        </div>
      </Card>
    </div>
  );
}
