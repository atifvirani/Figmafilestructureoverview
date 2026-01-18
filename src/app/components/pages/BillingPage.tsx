// Billing Page Component
import { useState } from 'react';
import { Card } from '@/app/components/design-system/Card';
import { Button } from '@/app/components/design-system/Button';
import { Input } from '@/app/components/design-system/Input';

function ServiceButton({ name, price, onClick }: { name: string; price: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-gray-300 bg-white p-4 hover:bg-gray-50 transition-colors text-left"
    >
      <div className="font-semibold text-gray-800">{name}</div>
      <div className="text-sm text-gray-600 mt-1">${price}</div>
    </button>
  );
}

export function BillingPage() {
  const [selectedTab, setSelectedTab] = useState('hair');

  const serviceCategories = [
    { id: 'hair', label: 'Hair Services' },
    { id: 'nails', label: 'Nails' },
    { id: 'facial', label: 'Facial' },
    { id: 'massage', label: 'Massage' },
    { id: 'waxing', label: 'Waxing' },
  ];

  const services = {
    hair: [
      { name: 'Haircut - Men', price: 25 },
      { name: 'Haircut - Women', price: 45 },
      { name: 'Hair Coloring', price: 120 },
      { name: 'Highlights', price: 95 },
      { name: 'Hair Treatment', price: 65 },
      { name: 'Styling', price: 35 },
    ],
    nails: [
      { name: 'Manicure', price: 30 },
      { name: 'Pedicure', price: 45 },
      { name: 'Gel Nails', price: 55 },
      { name: 'Acrylic Nails', price: 65 },
    ],
    facial: [
      { name: 'Basic Facial', price: 60 },
      { name: 'Deep Cleansing', price: 80 },
      { name: 'Anti-Aging Treatment', price: 120 },
    ],
  };

  const billItems = [
    { service: 'Haircut - Women', price: 45, staff: 'Sarah Johnson' },
    { service: 'Hair Treatment', price: 65, staff: 'Sarah Johnson' },
  ];

  const subtotal = billItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Billing</h1>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Service Selection */}
        <div className="col-span-2 space-y-4">
          {/* Customer Search */}
          <Card title="Customer">
            <Input placeholder="Search customer name or phone..." fullWidth />
          </Card>

          {/* Service Categories */}
          <Card title="Select Services">
            <div className="flex gap-2 mb-4 border-b-2 border-gray-200 pb-0">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedTab(cat.id)}
                  className={`px-4 py-2 border-2 border-b-0 transition-colors ${
                    selectedTab === cat.id
                      ? 'bg-white border-gray-300 border-b-white -mb-0.5 font-semibold'
                      : 'bg-gray-100 border-gray-200 text-gray-600'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Service Buttons Grid */}
            <div className="grid grid-cols-3 gap-3">
              {(services[selectedTab as keyof typeof services] || []).map((service, idx) => (
                <ServiceButton
                  key={idx}
                  name={service.name}
                  price={service.price}
                  onClick={() => {}}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column - Bill Summary */}
        <div className="space-y-4">
          <Card title="Bill Summary">
            <div className="space-y-3">
              {/* Bill Items */}
              {billItems.map((item, idx) => (
                <div key={idx} className="pb-3 border-b-2 border-gray-200 last:border-b-0">
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-sm font-semibold text-gray-800">{item.service}</div>
                    <button className="text-red-500 text-xs">✕</button>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">{item.staff}</div>
                  <div className="text-sm font-semibold text-gray-800">${item.price}</div>
                </div>
              ))}

              {billItems.length === 0 && (
                <div className="text-center py-8 text-gray-400 text-sm">
                  No services added
                </div>
              )}
            </div>
          </Card>

          {/* Totals */}
          <Card>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (8%):</span>
                <span className="font-semibold text-gray-800">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t-2 border-gray-300">
                <span className="text-gray-600">Discount:</span>
                <span className="font-semibold text-gray-800">$0.00</span>
              </div>
              <div className="flex justify-between text-lg pt-3 border-t-2 border-gray-300">
                <span className="font-semibold text-gray-800">Total:</span>
                <span className="font-bold text-gray-800">${total.toFixed(2)}</span>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button variant="primary" size="medium" fullWidth>Generate Bill</Button>
            <Button variant="secondary" size="medium" fullWidth>Print</Button>
            <Button variant="secondary" size="medium" fullWidth>Send SMS</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
