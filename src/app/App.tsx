import { useState } from 'react';
import { Sidebar } from '@/app/components/layout/Sidebar';
import { TopBar } from '@/app/components/layout/TopBar';
import { DashboardPage } from '@/app/components/pages/DashboardPage';
import { ChairsPage } from '@/app/components/pages/ChairsPage';
import { BillingPage } from '@/app/components/pages/BillingPage';
import { InvoicesPage } from '@/app/components/pages/InvoicesPage';
import { CRMPage } from '@/app/components/pages/CRMPage';
import { ServicesPage } from '@/app/components/pages/ServicesPage';
import { SalesPage } from '@/app/components/pages/SalesPage';
import { CouponsPage } from '@/app/components/pages/CouponsPage';
import { AestheticsPage } from '@/app/components/pages/AestheticsPage';
import { TabletPage } from '@/app/components/pages/TabletPage';
import { SettingsPage } from '@/app/components/pages/SettingsPage';
import { DeveloperPage } from '@/app/components/pages/DeveloperPage';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'chairs':
        return <ChairsPage />;
      case 'billing':
        return <BillingPage />;
      case 'invoices':
        return <InvoicesPage />;
      case 'crm':
        return <CRMPage />;
      case 'services':
        return <ServicesPage />;
      case 'sales':
        return <SalesPage />;
      case 'coupons':
        return <CouponsPage />;
      case 'aesthetics':
        return <AestheticsPage />;
      case 'tablet':
        return <TabletPage />;
      case 'settings':
        return <SettingsPage />;
      case 'developer':
        return <DeveloperPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="size-full flex flex-col bg-gray-50">
      {/* Top Bar */}
      <TopBar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}
