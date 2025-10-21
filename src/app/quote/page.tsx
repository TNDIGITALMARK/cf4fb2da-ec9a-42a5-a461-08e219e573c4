'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    facilityType: '',
    equipmentCategory: '',
    specificEquipment: '',
    quantity: '',
    budget: '',
    timeline: '',
    installationRequired: 'yes',
    trainingRequired: 'yes',
    additionalNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send data to backend
    console.log('Quote request submitted:', formData);
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="bg-white rounded-lg p-12 shadow-xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quote Request Submitted!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Thank you for your interest in our biomedical equipment. Our expert team will
                review your requirements and contact you within 24 hours.
              </p>
              <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg p-6 mb-8">
                <p className="font-semibold text-gray-900 mb-2">
                  Reference Number: QR-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
                <p className="text-sm text-gray-600">
                  Please save this reference number for your records
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> info@qmedqatar.com
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Phone:</strong> +974 4412 3456
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Emergency Support:</strong> +974 5555 1234
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white px-8 py-3 rounded-lg font-semibold uppercase text-sm tracking-wide transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        {/* Page Header */}
        <section className="bg-[#1E3A8A] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Request a Quote
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Get personalized pricing and expert consultation for your medical equipment needs
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Organization Information */}
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] uppercase tracking-wide mb-6 pb-3 border-b-2 border-[#8B1538]">
                    Organization Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                        placeholder="Enter organization name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Facility Type *
                      </label>
                      <select
                        name="facilityType"
                        value={formData.facilityType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                      >
                        <option value="">Select facility type</option>
                        <option value="hospital">Hospital</option>
                        <option value="clinic">Private Clinic</option>
                        <option value="diagnostic">Diagnostic Center</option>
                        <option value="laboratory">Medical Laboratory</option>
                        <option value="rehabilitation">Rehabilitation Center</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] uppercase tracking-wide mb-6 pb-3 border-b-2 border-[#8B1538]">
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                        placeholder="+974 XXXX XXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Equipment Requirements */}
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] uppercase tracking-wide mb-6 pb-3 border-b-2 border-[#8B1538]">
                    Equipment Requirements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Equipment Category *
                      </label>
                      <select
                        name="equipmentCategory"
                        value={formData.equipmentCategory}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                      >
                        <option value="">Select category</option>
                        <option value="imaging">Diagnostic Imaging</option>
                        <option value="laboratory">Laboratory Equipment</option>
                        <option value="surgical">Surgical Instruments</option>
                        <option value="monitoring">Patient Monitoring</option>
                        <option value="rehabilitation">Rehabilitation Devices</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Quantity Required *
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                        placeholder="Enter quantity"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Specific Equipment
                      </label>
                      <input
                        type="text"
                        name="specificEquipment"
                        value={formData.specificEquipment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                        placeholder="e.g., MRI 3.0T, CT Scanner 64-slice"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A8A] uppercase tracking-wide mb-6 pb-3 border-b-2 border-[#8B1538]">
                    Project Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget Range (QAR)
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under QR 50,000</option>
                        <option value="50k-100k">QR 50,000 - 100,000</option>
                        <option value="100k-250k">QR 100,000 - 250,000</option>
                        <option value="250k-500k">QR 250,000 - 500,000</option>
                        <option value="over-500k">Over QR 500,000</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Required Delivery Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">Urgent (Within 1 month)</option>
                        <option value="1-3months">1-3 Months</option>
                        <option value="3-6months">3-6 Months</option>
                        <option value="6months-plus">6+ Months</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Installation Required?
                      </label>
                      <div className="flex gap-6 pt-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="installationRequired"
                            value="yes"
                            checked={formData.installationRequired === 'yes'}
                            onChange={handleChange}
                            className="mr-2 w-4 h-4 text-[#1E3A8A]"
                          />
                          <span className="text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="installationRequired"
                            value="no"
                            checked={formData.installationRequired === 'no'}
                            onChange={handleChange}
                            className="mr-2 w-4 h-4 text-[#1E3A8A]"
                          />
                          <span className="text-gray-700">No</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Staff Training Required?
                      </label>
                      <div className="flex gap-6 pt-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="trainingRequired"
                            value="yes"
                            checked={formData.trainingRequired === 'yes'}
                            onChange={handleChange}
                            className="mr-2 w-4 h-4 text-[#1E3A8A]"
                          />
                          <span className="text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="trainingRequired"
                            value="no"
                            checked={formData.trainingRequired === 'no'}
                            onChange={handleChange}
                            className="mr-2 w-4 h-4 text-[#1E3A8A]"
                          />
                          <span className="text-gray-700">No</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes or Special Requirements
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-all resize-none"
                    placeholder="Please provide any additional information that would help us prepare your quote..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Submit Quote Request
                  </button>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    Our team will respond within 24 hours with a detailed quote
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
