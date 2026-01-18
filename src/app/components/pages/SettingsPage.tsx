// Settings Page Component
import { Card } from '@/app/components/design-system/Card';
import { Button } from '@/app/components/design-system/Button';
import { Input } from '@/app/components/design-system/Input';
import { Dropdown } from '@/app/components/design-system/Dropdown';

function ToggleRow({ label, description, enabled }: { label: string; description: string; enabled: boolean }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
      <div>
        <div className="text-sm font-semibold text-gray-800">{label}</div>
        <div className="text-xs text-gray-600 mt-1">{description}</div>
      </div>
      <button
        className={`w-12 h-6 rounded-full border-2 transition-colors ${
          enabled ? 'bg-green-600 border-green-600' : 'bg-gray-200 border-gray-300'
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );
}

export function SettingsPage() {
  const staffMembers = [
    { name: 'Sarah Johnson', role: 'Senior Stylist', phone: '(555) 123-4567', status: 'active' },
    { name: 'Mike Chen', role: 'Colorist', phone: '(555) 234-5678', status: 'active' },
    { name: 'Emily Rodriguez', role: 'Nail Technician', phone: '(555) 345-6789', status: 'active' },
    { name: 'David Kim', role: 'Massage Therapist', phone: '(555) 456-7890', status: 'active' },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Settings</h1>

      {/* General Settings */}
      <Card title="General Settings">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Salon Name</label>
            <Input placeholder="Luxury Salon & Spa" fullWidth />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
              <Input placeholder="(555) 000-0000" fullWidth />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <Input type="email" placeholder="info@salon.com" fullWidth />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Address</label>
            <Input placeholder="123 Main Street, City, State 12345" fullWidth />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Currency</label>
              <Dropdown options={['USD ($)', 'EUR (€)', 'GBP (£)', 'INR (₹)']} placeholder="Select currency" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Tax Rate (%)</label>
              <Input type="number" placeholder="8.0" fullWidth />
            </div>
          </div>
          <div className="pt-4">
            <Button variant="primary" size="medium">Save Changes</Button>
          </div>
        </div>
      </Card>

      {/* Staff Management */}
      <Card title="Staff Management">
        <div className="mb-4">
          <Button variant="primary" size="medium">+ Add Staff Member</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Role</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Phone</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffMembers.map((staff, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-semibold text-gray-800">{staff.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{staff.role}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">{staff.phone}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="px-3 py-1 bg-green-100 border border-green-400 text-green-800 text-xs">
                      Active
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="secondary" size="small">Edit</Button>
                      <Button variant="danger" size="small">Remove</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Theme Settings */}
      <Card title="Theme & Display">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Color Scheme</label>
            <div className="grid grid-cols-4 gap-3">
              {['Default', 'Dark', 'Blue', 'Purple'].map((theme) => (
                <button
                  key={theme}
                  className="p-4 border-2 border-gray-300 hover:border-gray-500 bg-white transition-colors"
                >
                  <div className="font-semibold text-gray-800 text-sm">{theme}</div>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Font Size</label>
            <Dropdown options={['Small', 'Medium', 'Large']} placeholder="Select font size" />
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card title="Notifications">
        <div className="space-y-1">
          <ToggleRow
            label="Email Notifications"
            description="Receive notifications via email"
            enabled={true}
          />
          <ToggleRow
            label="SMS Notifications"
            description="Send SMS to customers"
            enabled={true}
          />
          <ToggleRow
            label="Desktop Notifications"
            description="Show browser notifications"
            enabled={false}
          />
          <ToggleRow
            label="Daily Reports"
            description="Receive daily summary reports"
            enabled={true}
          />
        </div>
      </Card>

      {/* Business Hours */}
      <Card title="Business Hours">
        <div className="space-y-3">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
            <div key={day} className="flex items-center gap-4">
              <div className="w-32 text-sm font-semibold text-gray-800">{day}</div>
              <Input type="text" placeholder="09:00 AM" />
              <span className="text-gray-500">to</span>
              <Input type="text" placeholder="06:00 PM" />
              <button className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800">
                {day === 'Sunday' ? '✓ Closed' : 'Mark Closed'}
              </button>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <Button variant="primary" size="medium">Save Hours</Button>
        </div>
      </Card>

      {/* Tablet PIN */}
      <Card title="Tablet Mode Settings">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Tablet PIN Code</label>
            <div className="flex gap-3 items-center">
              <Input type="password" placeholder="****" />
              <Button variant="secondary" size="medium">Change PIN</Button>
            </div>
          </div>
          <div className="text-xs text-gray-600">
            This PIN is required to access tablet mode and make changes from tablet devices.
          </div>
        </div>
      </Card>
    </div>
  );
}
