'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Equipment' },
    { id: 'imaging', name: 'Diagnostic Imaging' },
    { id: 'laboratory', name: 'Laboratory Equipment' },
    { id: 'surgical', name: 'Surgical Instruments' },
    { id: 'monitoring', name: 'Patient Monitoring' },
    { id: 'rehabilitation', name: 'Rehabilitation' },
  ];

  const products = [
    {
      id: 1,
      name: 'MRI System 3.0T',
      category: 'imaging',
      manufacturer: 'Philips Healthcare',
      price: 'QR 450,000',
      image: '/generated/hero-medical-equipment.png',
      description: 'Advanced 3.0 Tesla MRI system with superior image quality',
      certifications: ['CE', 'ISO', 'QMH'],
      warranty: '5 years',
      availability: 'In Stock',
    },
    {
      id: 2,
      name: 'CT Scanner 64-Slice',
      category: 'imaging',
      manufacturer: 'GE Medical',
      price: 'QR 320,000',
      image: '/generated/hero-medical-equipment.png',
      description: 'High-speed 64-slice CT scanner for comprehensive diagnostics',
      certifications: ['CE', 'ISO', 'QMH'],
      warranty: '5 years',
      availability: 'In Stock',
    },
    {
      id: 3,
      name: 'Ultrasound System Premium',
      category: 'imaging',
      manufacturer: 'Siemens Healthineers',
      price: 'QR 85,000 - QR 180,000',
      image: '/generated/hero-medical-equipment.png',
      description: 'Portable ultrasound with advanced imaging capabilities',
      certifications: ['CE', 'ISO'],
      warranty: '3 years',
      availability: 'Available',
    },
    {
      id: 4,
      name: 'Automated Blood Analyzer',
      category: 'laboratory',
      manufacturer: 'Roche Diagnostics',
      price: 'QR 120,000',
      image: '/generated/hero-medical-equipment.png',
      description: 'High-throughput automated hematology analyzer',
      certifications: ['CE', 'ISO', 'QMH'],
      warranty: '3 years',
      availability: 'In Stock',
    },
    {
      id: 5,
      name: 'Digital Microscopy System',
      category: 'laboratory',
      manufacturer: 'Olympus Medical',
      price: 'QR 25,000',
      image: '/generated/hero-medical-equipment.png',
      description: 'Advanced digital microscope for laboratory diagnostics',
      certifications: ['CE', 'ISO'],
      warranty: '2 years',
      availability: 'Available',
    },
    {
      id: 6,
      name: 'Laboratory Centrifuge',
      category: 'laboratory',
      manufacturer: 'Eppendorf',
      price: 'QR 8,500',
      image: '/generated/hero-medical-equipment.png',
      description: 'High-performance centrifuge for clinical laboratories',
      certifications: ['CE', 'ISO'],
      warranty: '2 years',
      availability: 'In Stock',
    },
    {
      id: 7,
      name: 'Complete OR Package',
      category: 'surgical',
      manufacturer: 'Various Premium Brands',
      price: 'QR 95,000',
      image: '/generated/hero-medical-equipment.png',
      description: 'Comprehensive surgical instrument package for operating rooms',
      certifications: ['CE', 'ISO', 'QMH'],
      warranty: '3 years',
      availability: 'Custom Order',
    },
    {
      id: 8,
      name: 'Minimally Invasive Surgical Tools',
      category: 'surgical',
      manufacturer: 'Stryker',
      price: 'QR 15,000 per set',
      image: '/generated/hero-medical-equipment.png',
      description: 'Precision instruments for laparoscopic procedures',
      certifications: ['CE', 'ISO'],
      warranty: '2 years',
      availability: 'In Stock',
    },
    {
      id: 9,
      name: 'Patient Monitor Multi-Parameter',
      category: 'monitoring',
      manufacturer: 'Philips Healthcare',
      price: 'QR 28,000',
      image: '/generated/hero-medical-equipment.png',
      description: 'Comprehensive vital signs monitoring system',
      certifications: ['CE', 'ISO', 'QMH'],
      warranty: '3 years',
      availability: 'In Stock',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        {/* Page Header */}
        <section className="bg-[#1E3A8A] py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Equipment Catalog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Browse our comprehensive range of certified biomedical equipment from leading
              international manufacturers
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-md sticky top-24">
                <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-4">
                  Filter by Category
                </h3>

                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-[#1E3A8A] text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="mt-6">
                  <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide mb-4">
                    Search Products
                  </h3>
                  <input
                    type="text"
                    placeholder="Search equipment..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
                  />
                </div>

                {/* Contact Support */}
                <div className="mt-6 p-4 bg-[#F9FAFB] rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Need Assistance?</h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Contact our expert team for equipment recommendations
                  </p>
                  <Link
                    href="/quote"
                    className="block w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-center py-2 rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{filteredProducts.length}</span>{' '}
                  products
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Product Image */}
                    <div className="relative h-48 bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {product.availability === 'In Stock' && (
                        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          In Stock
                        </span>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600">{product.manufacturer}</p>
                      </div>

                      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Certifications */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.certifications.map((cert, index) => (
                          <span
                            key={index}
                            className="bg-[#8B1538]/10 text-[#8B1538] text-xs font-semibold px-2 py-1 rounded"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>

                      {/* Price and Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Starting from</p>
                          <p className="text-xl font-bold text-[#1E3A8A]">{product.price}</p>
                        </div>
                        <Link
                          href="/quote"
                          className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-2 rounded-lg font-semibold uppercase text-xs tracking-wide transition-colors"
                        >
                          Get Quote
                        </Link>
                      </div>

                      {/* Warranty Info */}
                      <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                        <span>✓ {product.warranty} warranty</span>
                        <span>✓ Local support</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">No products found matching your criteria</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                    className="text-[#3B82F6] hover:underline font-semibold"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
