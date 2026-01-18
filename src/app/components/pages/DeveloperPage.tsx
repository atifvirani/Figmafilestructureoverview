// Developer Options Page Component
import { Card } from '@/app/components/design-system/Card';
import { Button } from '@/app/components/design-system/Button';
import { AlertCircle, Download, Upload, Database, RefreshCw } from 'lucide-react';

export function DeveloperPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Developer Options</h1>

      {/* Warning Notice */}
      <Card>
        <div className="flex gap-3 items-start bg-red-50 -m-4 p-4 border-2 border-red-300">
          <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
          <div className="text-sm text-gray-800">
            <strong className="text-red-800">⚠️ Warning:</strong> These are advanced options that can affect your entire system. 
            All operations require password confirmation. Only proceed if you know what you're doing.
          </div>
        </div>
      </Card>

      {/* Database Operations */}
      <Card title="Database Management">
        <div className="space-y-4">
          {/* Export Database */}
          <div className="border-2 border-gray-300 p-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-gray-400 bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Download className="text-gray-600" size={24} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 mb-1">Export Database</div>
                <div className="text-sm text-gray-600 mb-3">
                  Download a complete backup of your database including all customers, services, invoices, and settings.
                </div>
                <Button variant="secondary" size="medium">Export Database</Button>
              </div>
            </div>
          </div>

          {/* Import Database */}
          <div className="border-2 border-gray-300 p-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-gray-400 bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Upload className="text-gray-600" size={24} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 mb-1">Import Database</div>
                <div className="text-sm text-gray-600 mb-3">
                  Restore database from a backup file. This will overwrite all current data.
                </div>
                <Button variant="secondary" size="medium">Import Database</Button>
              </div>
            </div>
          </div>

          {/* Backup Database */}
          <div className="border-2 border-gray-300 p-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-gray-400 bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Database className="text-gray-600" size={24} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-800 mb-1">Create Backup</div>
                <div className="text-sm text-gray-600 mb-3">
                  Create a timestamped backup of your current database. Backups are stored locally.
                </div>
                <Button variant="secondary" size="medium">Create Backup</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Dangerous Operations */}
      <Card title="Dangerous Operations">
        <div className="space-y-4">
          {/* Reset Database */}
          <div className="border-2 border-red-300 bg-red-50 p-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-red-400 bg-red-200 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="text-red-700" size={24} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-red-800 mb-1">Reset Database</div>
                <div className="text-sm text-gray-700 mb-3">
                  <strong>⚠️ WARNING:</strong> This will permanently delete ALL data including customers, invoices, services, and settings. 
                  This action cannot be undone. Create a backup first!
                </div>
                <Button variant="danger" size="medium">Reset Database</Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* System Information */}
      <Card title="System Information">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Application Version:</span>
            <span className="font-mono font-semibold text-gray-800">v2.1.0</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Database Version:</span>
            <span className="font-mono font-semibold text-gray-800">v1.8.3</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Last Backup:</span>
            <span className="font-semibold text-gray-800">2026-01-17 11:30 PM</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Total Records:</span>
            <span className="font-semibold text-gray-800">2,847</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Database Size:</span>
            <span className="font-semibold text-gray-800">45.3 MB</span>
          </div>
        </div>
      </Card>

      {/* API Configuration */}
      <Card title="API Configuration">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">SMS Gateway API Key</label>
            <div className="flex gap-2">
              <input
                type="password"
                className="flex-1 border-2 border-gray-300 px-3 py-2"
                placeholder="••••••••••••••••"
              />
              <Button variant="secondary" size="medium">Update</Button>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Email Service API Key</label>
            <div className="flex gap-2">
              <input
                type="password"
                className="flex-1 border-2 border-gray-300 px-3 py-2"
                placeholder="••••••••••••••••"
              />
              <Button variant="secondary" size="medium">Update</Button>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Payment Gateway API Key</label>
            <div className="flex gap-2">
              <input
                type="password"
                className="flex-1 border-2 border-gray-300 px-3 py-2"
                placeholder="••••••••••••••••"
              />
              <Button variant="secondary" size="medium">Update</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Debug Mode */}
      <Card title="Debug Options">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm font-semibold text-gray-800">Enable Debug Mode</div>
              <div className="text-xs text-gray-600 mt-1">Show detailed logs in console</div>
            </div>
            <button className="w-12 h-6 rounded-full border-2 bg-gray-200 border-gray-300">
              <div className="w-4 h-4 rounded-full bg-white translate-x-0.5" />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm font-semibold text-gray-800">Performance Monitoring</div>
              <div className="text-xs text-gray-600 mt-1">Track system performance metrics</div>
            </div>
            <button className="w-12 h-6 rounded-full border-2 bg-gray-200 border-gray-300">
              <div className="w-4 h-4 rounded-full bg-white translate-x-0.5" />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm font-semibold text-gray-800">Error Reporting</div>
              <div className="text-xs text-gray-600 mt-1">Send error reports to developers</div>
            </div>
            <button className="w-12 h-6 rounded-full border-2 bg-green-600 border-green-600">
              <div className="w-4 h-4 rounded-full bg-white translate-x-6" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
