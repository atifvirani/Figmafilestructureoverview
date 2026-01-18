// Aesthetics Management Page Component
import { Card } from '@/app/components/design-system/Card';
import { Button } from '@/app/components/design-system/Button';
import { CheckCircle, FileText, AlertCircle } from 'lucide-react';

export function AestheticsPage() {
  const aestheticServices = [
    { name: 'Botox Injection', price: 350, requiresConsent: true, postCare: true },
    { name: 'Dermal Fillers', price: 450, requiresConsent: true, postCare: true },
    { name: 'Chemical Peel', price: 180, requiresConsent: true, postCare: true },
    { name: 'Laser Hair Removal', price: 200, requiresConsent: true, postCare: true },
    { name: 'Microneedling', price: 250, requiresConsent: true, postCare: true },
  ];

  const consentForms = [
    { name: 'Botox Consent Form', version: '2.1', lastUpdated: '2026-01-10', status: 'active' },
    { name: 'Dermal Filler Consent', version: '1.8', lastUpdated: '2026-01-05', status: 'active' },
    { name: 'Laser Treatment Consent', version: '3.2', lastUpdated: '2025-12-20', status: 'active' },
  ];

  const postCareTemplates = [
    { name: 'Botox Post-Care', procedures: 'Botox Injection', sends: 'Email + SMS' },
    { name: 'Filler Post-Care', procedures: 'Dermal Fillers', sends: 'Email + SMS' },
    { name: 'Chemical Peel Post-Care', procedures: 'Chemical Peel', sends: 'Email + SMS' },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Aesthetics Management</h1>

      {/* Important Notice */}
      <Card>
        <div className="flex gap-3 items-start">
          <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
          <div className="text-sm text-gray-700">
            <strong className="text-gray-800">Important:</strong> All aesthetic procedures require signed consent forms before billing. 
            Post-care instructions are automatically sent to customers after service completion.
          </div>
        </div>
      </Card>

      {/* Aesthetic Services */}
      <Card title="Aesthetic Services">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Service Name</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Price</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Consent Required</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Post-Care</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {aestheticServices.map((service, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-semibold text-gray-800">{service.name}</td>
                  <td className="py-3 px-4 text-sm text-right text-gray-700">${service.price}</td>
                  <td className="py-3 px-4 text-center">
                    {service.requiresConsent && (
                      <CheckCircle className="text-green-600 mx-auto" size={18} />
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {service.postCare && (
                      <CheckCircle className="text-blue-600 mx-auto" size={18} />
                    )}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="secondary" size="small">Manage</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <Button variant="primary" size="medium">+ Add Aesthetic Service</Button>
        </div>
      </Card>

      {/* Consent Forms */}
      <Card title="Consent Forms">
        <div className="space-y-3">
          {consentForms.map((form, idx) => (
            <div key={idx} className="border-2 border-gray-300 p-4 hover:border-gray-400 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <FileText className="text-gray-400 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-800">{form.name}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Version {form.version} • Last updated: {form.lastUpdated}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" size="small">View</Button>
                  <Button variant="secondary" size="small">Edit</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button variant="primary" size="medium">+ Create Consent Form</Button>
        </div>
      </Card>

      {/* Post-Care Templates */}
      <Card title="Post-Care Instructions">
        <div className="space-y-3">
          {postCareTemplates.map((template, idx) => (
            <div key={idx} className="border-2 border-gray-300 p-4 hover:border-gray-400 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-800">{template.name}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    For: {template.procedures}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <span>📧</span>
                    Auto-sends via: {template.sends}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" size="small">View</Button>
                  <Button variant="secondary" size="small">Edit</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button variant="primary" size="medium">+ Create Post-Care Template</Button>
        </div>
      </Card>

      {/* Workflow Info */}
      <Card title="Aesthetic Service Workflow">
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs flex-shrink-0">1</div>
            <div>
              <strong>Customer Consultation:</strong> Discuss procedure, risks, and benefits
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs flex-shrink-0">2</div>
            <div>
              <strong>Consent Form:</strong> Customer reviews and signs consent form (mandatory)
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs flex-shrink-0">3</div>
            <div>
              <strong>Perform Service:</strong> Licensed professional performs aesthetic procedure
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs flex-shrink-0">4</div>
            <div>
              <strong>Generate Bill:</strong> System allows billing only after consent is signed
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs flex-shrink-0">5</div>
            <div>
              <strong>Auto Post-Care:</strong> Post-care instructions automatically sent via email/SMS
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
