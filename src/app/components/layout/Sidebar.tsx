// App Shell: Sidebar Navigation Component
import { Home, Calendar, DollarSign, FileText, Users, Scissors, TrendingUp, Tag, Sparkles, Tablet, Settings, Code } from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function SidebarItem({ icon, label, active = false, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 border-l-4 transition-colors ${
        active 
          ? 'border-gray-800 bg-gray-100' 
          : 'border-transparent hover:bg-gray-50'
      }`}
    >
      <span className={active ? 'text-gray-800' : 'text-gray-500'}>{icon}</span>
      <span className={`text-sm ${active ? 'font-semibold text-gray-800' : 'text-gray-600'}`}>
        {label}
      </span>
    </button>
  );
}

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', icon: <Home size={20} />, label: 'Dashboard' },
    { id: 'chairs', icon: <Calendar size={20} />, label: 'Chairs Management' },
    { id: 'billing', icon: <DollarSign size={20} />, label: 'Billing' },
    { id: 'invoices', icon: <FileText size={20} />, label: 'Invoices' },
    { id: 'crm', icon: <Users size={20} />, label: 'CRM' },
    { id: 'services', icon: <Scissors size={20} />, label: 'Services' },
    { id: 'sales', icon: <TrendingUp size={20} />, label: 'Sales & Inventory' },
    { id: 'coupons', icon: <Tag size={20} />, label: 'Coupons' },
    { id: 'aesthetics', icon: <Sparkles size={20} />, label: 'Aesthetics' },
    { id: 'tablet', icon: <Tablet size={20} />, label: 'Tablet Mode' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Settings' },
    { id: 'developer', icon: <Code size={20} />, label: 'Developer Options' },
  ];

  return (
    <div className="w-64 h-full border-r-2 border-gray-300 bg-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b-2 border-gray-300">
        <div className="text-2xl font-bold text-gray-800">SALON PRO</div>
        <div className="text-xs text-gray-500 mt-1">Management System</div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-2">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activePage === item.id}
            onClick={() => onNavigate(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
