// Tablet Mode Page Component
import { Card } from '@/app/components/design-system/Card';
import { Button } from '@/app/components/design-system/Button';
import { Lock, Users, Calendar } from 'lucide-react';

export function TabletPage() {
  const chairs = Array.from({ length: 8 }, (_, i) => ({
    number: i + 1,
    status: i % 3 === 0 ? 'occupied' : 'empty'
  }));

  const services = [
    'Haircut - Men',
    'Haircut - Women',
    'Hair Coloring',
    'Highlights',
    'Manicure',
    'Pedicure',
    'Facial Treatment',
    'Massage',
  ];

  const staff = [
    'Sarah Johnson',
    'Mike Chen',
    'Emily Rodriguez',
    'David Kim',
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Tablet Mode</h1>
        <div className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 bg-gray-50">
          <Lock size={18} className="text-gray-600" />
          <span className="text-sm text-gray-700">PIN Protected</span>
        </div>
      </div>

      {/* Description */}
      <Card>
        <div className="text-sm text-gray-700">
          <strong>Tablet Mode</strong> is designed for customer-facing tablets and staff input devices with larger buttons and simplified interface.
          Access is PIN-protected to ensure only authorized staff can make changes.
        </div>
      </Card>

      {/* PIN Lock Screen Mockup */}
      <Card title="PIN Lock Screen">
        <div className="bg-gray-50 border-2 border-gray-300 p-8 flex flex-col items-center">
          <Lock size={48} className="text-gray-400 mb-4" />
          <div className="text-lg font-semibold text-gray-800 mb-6">Enter PIN to Continue</div>
          
          {/* PIN Display */}
          <div className="flex gap-3 mb-6">
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} className="w-12 h-12 border-2 border-gray-400 bg-white flex items-center justify-center text-2xl">
                •
              </div>
            ))}
          </div>

          {/* Numeric Keypad */}
          <div className="grid grid-cols-3 gap-3 max-w-xs">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                className="w-20 h-20 border-2 border-gray-400 bg-white hover:bg-gray-100 text-2xl font-semibold text-gray-800"
              >
                {num}
              </button>
            ))}
            <button className="w-20 h-20 border-2 border-gray-400 bg-white hover:bg-gray-100 text-lg font-semibold text-gray-800">
              ←
            </button>
            <button className="w-20 h-20 border-2 border-gray-400 bg-white hover:bg-gray-100 text-2xl font-semibold text-gray-800">
              0
            </button>
            <button className="w-20 h-20 border-2 border-gray-400 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold">
              ✓
            </button>
          </div>
        </div>
      </Card>

      {/* Customer View - Chair Selection */}
      <Card title="Customer View - Chair Selection">
        <div className="bg-gray-50 border-2 border-gray-300 p-6">
          <div className="text-center mb-6">
            <Calendar size={32} className="text-gray-400 mx-auto mb-2" />
            <div className="text-xl font-semibold text-gray-800">Select Your Chair</div>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {chairs.map((chair) => (
              <button
                key={chair.number}
                className={`p-6 border-4 transition-colors ${
                  chair.status === 'empty'
                    ? 'border-gray-400 bg-white hover:border-gray-600'
                    : 'border-yellow-400 bg-yellow-50 cursor-not-allowed'
                }`}
                disabled={chair.status === 'occupied'}
              >
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {chair.number}
                </div>
                <div className={`text-sm font-semibold ${
                  chair.status === 'empty' ? 'text-green-700' : 'text-yellow-800'
                }`}>
                  {chair.status === 'empty' ? 'Available' : 'Occupied'}
                </div>
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Staff Input - Service Selection */}
      <Card title="Staff Input - Service Selection">
        <div className="bg-gray-50 border-2 border-gray-300 p-6">
          <div className="text-center mb-6">
            <Users size={32} className="text-gray-400 mx-auto mb-2" />
            <div className="text-xl font-semibold text-gray-800">Select Service</div>
            <div className="text-sm text-gray-600 mt-1">Chair #3 - Jane Smith</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            {services.map((service, idx) => (
              <button
                key={idx}
                className="p-6 border-4 border-gray-400 bg-white hover:border-gray-600 transition-colors text-left"
              >
                <div className="text-lg font-semibold text-gray-800">{service}</div>
              </button>
            ))}
          </div>

          <div className="border-t-2 border-gray-300 pt-4">
            <div className="text-center mb-4">
              <div className="text-lg font-semibold text-gray-800">Assign Staff</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {staff.map((person, idx) => (
                <button
                  key={idx}
                  className="p-4 border-4 border-gray-400 bg-white hover:border-gray-600 transition-colors"
                >
                  <div className="text-base font-semibold text-gray-800">{person}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Button variant="secondary" size="large" fullWidth>Cancel</Button>
            <Button variant="primary" size="large" fullWidth>Start Service</Button>
          </div>
        </div>
      </Card>

      {/* Features List */}
      <Card title="Tablet Mode Features">
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex gap-3">
            <span className="text-green-600">✓</span>
            <span><strong>Large Touch Targets:</strong> Buttons sized for easy touch interaction</span>
          </div>
          <div className="flex gap-3">
            <span className="text-green-600">✓</span>
            <span><strong>PIN Protection:</strong> Secure access with 4-digit PIN</span>
          </div>
          <div className="flex gap-3">
            <span className="text-green-600">✓</span>
            <span><strong>Customer Facing:</strong> Clean, simple interface for customer chair selection</span>
          </div>
          <div className="flex gap-3">
            <span className="text-green-600">✓</span>
            <span><strong>Staff Input:</strong> Quick service and staff assignment</span>
          </div>
          <div className="flex gap-3">
            <span className="text-green-600">✓</span>
            <span><strong>Real-time Sync:</strong> Updates chair status across all devices</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
