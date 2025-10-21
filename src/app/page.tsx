import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const services = [
    {
      icon: '🔬',
      title: 'Medical Imaging',
      description: 'Advanced diagnostic imaging solutions including MRI, CT, and ultrasound systems',
    },
    {
      icon: '🔧',
      title: 'Surgical Tools',
      description: 'Premium surgical instruments and complete OR packages for modern healthcare',
    },
    {
      icon: '💉',
      title: 'Patient Care',
      description: 'Comprehensive patient monitoring and care equipment for all medical facilities',
    },
    {
      icon: '🧪',
      title: 'Laboratory',
      description: 'State-of-the-art laboratory equipment and diagnostic analysis systems',
    },
    {
      icon: '⚙️',
      title: 'Equipment Maintenance',
      description: '24/7 preventive maintenance and repair services by certified engineers',
    },
    {
      icon: '🔍',
      title: 'Clinic Setup & Consultation',
      description: 'Complete facility planning and equipment installation services',
    },
  ];

  const certifications = [
    { name: 'ISO 13485', description: 'Medical Device Quality' },
    { name: 'CE Marking', description: 'European Compliance' },
    { name: 'QMH License', description: 'Qatar Ministry of Health' },
  ];

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/generated/hero-medical-equipment.png"
              alt="Modern medical facility"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 to-[#1E3A8A]/70"></div>
          </div>

          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
                Innovating Healthcare for Qatar
              </h1>
              <p className="text-xl mb-8 text-white/95">
                Your Trusted Partner in Medical Technology Distribution
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/catalog"
                  className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3 rounded-lg font-semibold uppercase text-sm tracking-wide transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  Explore Products
                </Link>
                <Link
                  href="/quote"
                  className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-3 rounded-lg font-semibold uppercase text-sm tracking-wide transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-[#1E3A8A] uppercase tracking-wider mb-2">
                Featured Services
              </h3>
              <div className="w-24 h-1 bg-[#8B1538] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#F9FAFB] rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="text-5xl mb-4 text-[#8B1538]">{service.icon}</div>
                  <h4 className="font-semibold text-gray-900 uppercase text-sm tracking-wide mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h3 className="text-2xl font-bold text-[#1E3A8A] uppercase tracking-wider mb-6">
                  About Q-MED Devices
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Since 2018, Qatar Medical Solutions WLL has established itself as the premier
                  biomedical equipment distributor in Qatar. We partner with leading international
                  manufacturers like Philips Healthcare, GE Medical, and Siemens Healthineers to
                  bring certified medical devices to healthcare facilities across Qatar.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our comprehensive service coverage includes installation, commissioning, preventive
                  maintenance, and 24/7 support by certified engineers. We maintain local spare parts
                  inventory and provide staff training in both Arabic and English.
                </p>

                {/* Certifications */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg border border-gray-200"
                    >
                      <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-[#8B1538]">
                          {cert.name.split(' ')[0]}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900">{cert.name}</div>
                        <div className="text-xs text-gray-600">{cert.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/generated/healthcare-team.png"
                  alt="Healthcare team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#1E3A8A]">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Upgrade Your Medical Equipment?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a personalized quote from our expert team. We provide competitive pricing,
              regulatory compliance support, and local service guarantees.
            </p>
            <Link
              href="/quote"
              className="inline-block bg-[#DC2626] hover:bg-[#B91C1C] text-white px-10 py-4 rounded-lg font-semibold uppercase text-sm tracking-wide transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
