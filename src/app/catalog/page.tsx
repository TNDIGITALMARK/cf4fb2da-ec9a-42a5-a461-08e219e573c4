'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CatalogPage() {
  const [selectedDivision, setSelectedDivision] = useState('all');

  const divisions = [
    { id: 'all', name: 'All Divisions' },
    { id: 'imaging', name: 'Diagnostic Imaging' },
    { id: 'laboratory', name: 'Laboratory Equipment' },
    { id: 'surgical', name: 'Surgical Instruments' },
    { id: 'monitoring', name: 'Patient Monitoring' },
    { id: 'rehabilitation', name: 'Rehabilitation' },
  ];

  const equipment = [
    {
      id: 1,
      name: 'MRI System 3.0T',
      division: 'imaging',
      manufacturer: 'Philips Healthcare',
      image: '/generated/hero-medical-equipment.png',
      description: 'Advanced 3.0 Tesla MRI system with superior image quality',
      certifications: ['CE', 'ISO', 'QMH'],
    },
    {
      id: 2,
      name: 'CT Scanner 64-Slice',
      division: 'imaging',
      manufacturer: 'GE Medical',
      image: '/generated/hero-medical-equipment.png',
      description: 'High-speed 64-slice CT scanner for comprehensive diagnostics',
      certifications: ['CE', 'ISO', 'QMH'],
    },
    {
      id: 3,
      name: 'Ultrasound System Premium',
      division: 'imaging',
      manufacturer: 'Siemens Healthineers',
      image: '/generated/hero-medical-equipment.png',
      description: 'Portable ultrasound with advanced imaging capabilities',
      certifications: ['CE', 'ISO'],
    },
    {
      id: 4,
      name: 'Automated Blood Analyzer',
      division: 'laboratory',
      manufacturer: 'Roche Diagnostics',
      image: '/generated/hero-medical-equipment.png',
      description: 'High-throughput automated hematology analyzer',
      certifications: ['CE', 'ISO', 'QMH'],
    },
    {
      id: 5,
      name: 'Digital Microscopy System',
      division: 'laboratory',
      manufacturer: 'Olympus Medical',
      image: '/generated/hero-medical-equipment.png',
      description: 'Advanced digital microscope for laboratory diagnostics',
      certifications: ['CE', 'ISO'],
    },
    {
      id: 6,
      name: 'Laboratory Centrifuge',
      division: 'laboratory',
      manufacturer: 'Eppendorf',
      image: '/generated/hero-medical-equipment.png',
      description: 'High-performance centrifuge for clinical laboratories',
      certifications: ['CE', 'ISO'],
    },
    {
      id: 7,
      name: 'Complete OR Package',
      division: 'surgical',
      manufacturer: 'Various Premium Brands',
      image: '/generated/hero-medical-equipment.png',
      description: 'Comprehensive surgical instrument package for operating rooms',
      certifications: ['CE', 'ISO', 'QMH'],
    },
    {
      id: 8,
      name: 'Minimally Invasive Surgical Tools',
      division: 'surgical',
      manufacturer: 'Stryker',
      image: '/generated/hero-medical-equipment.png',
      description: 'Precision instruments for laparoscopic procedures',
      certifications: ['CE', 'ISO'],
    },
    {
      id: 9,
      name: 'Patient Monitor Multi-Parameter',
      division: 'monitoring',
      manufacturer: 'Philips Healthcare',
      image: '/generated/hero-medical-equipment.png',
      description: 'Comprehensive vital signs monitoring system',
      certifications: ['CE', 'ISO', 'QMH'],
    },
  ];

  const filteredEquipment = equipment.filter((item) => {
    return selectedDivision === 'all' || item.division === selectedDivision;
  });

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        {/* Page Header */}
        <section className="bg-[#1E3A8A] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Equipment by Division
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Browse our comprehensive range of certified biomedical equipment organized by division
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Division Filter Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {divisions.map((division) => (
                <button
                  key={division.id}
                  onClick={() => setSelectedDivision(division.id)}
                  className={`px-6 py-3 rounded-lg font-semibold uppercase text-sm tracking-wide transition-all ${
                    selectedDivision === division.id
                      ? 'bg-[#1E3A8A] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {division.name}
                </button>
              ))}
            </div>
          </div>

          {/* Equipment Grid */}
          <div>
            <div className="mb-6 text-center">
              <p className="text-gray-600 text-lg">
                <span className="font-semibold text-[#1E3A8A]">{filteredEquipment.length}</span>{' '}
                equipment items
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEquipment.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Equipment Image */}
                  <div className="relative h-56 bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Equipment Details */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">{item.manufacturer}</p>
                    </div>

                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="bg-[#8B1538]/10 text-[#8B1538] text-xs font-semibold px-2 py-1 rounded"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-gray-200">
                      <Link
                        href="/quote"
                        className="block w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold uppercase text-xs tracking-wide transition-colors text-center"
                      >
                        Request Information
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredEquipment.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No equipment found in this division</p>
                <button
                  onClick={() => setSelectedDivision('all')}
                  className="text-[#3B82F6] hover:underline font-semibold"
                >
                  View all equipment
                </button>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow-md text-center">
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">Need More Information?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our expert team for detailed specifications, technical documentation, and personalized recommendations
            </p>
            <Link
              href="/quote"
              className="inline-block bg-[#DC2626] hover:bg-[#B91C1C] text-white px-10 py-3 rounded-lg font-semibold uppercase text-sm tracking-wide transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
