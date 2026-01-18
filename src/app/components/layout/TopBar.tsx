// App Shell: Top Bar Component

interface TopBarProps {
  salonName?: string;
  serverStatus?: 'online' | 'offline';
}

export function TopBar({ salonName = "Luxury Salon & Spa", serverStatus = 'online' }: TopBarProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className="h-16 border-b-2 border-gray-300 bg-white flex items-center justify-between px-6">
      {/* Salon Name */}
      <div className="font-semibold text-lg text-gray-800">{salonName}</div>

      {/* Center Info */}
      <div className="flex items-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>📅</span>
          <span>{currentDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🕐</span>
          <span>{currentTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={serverStatus === 'online' ? 'text-green-500' : 'text-red-500'}>
            {serverStatus === 'online' ? '🟢' : '🔴'}
          </span>
          <span>{serverStatus === 'online' ? 'Online' : 'Offline'}</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 border-2 border-gray-400 bg-gray-200 flex items-center justify-center text-gray-600">
          👤
        </div>
        <div className="text-sm">
          <div className="font-semibold text-gray-800">Admin User</div>
          <div className="text-gray-500 text-xs">Owner</div>
        </div>
      </div>
    </div>
  );
}
