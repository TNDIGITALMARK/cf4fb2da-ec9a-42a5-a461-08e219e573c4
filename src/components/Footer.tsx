import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1">
            <Image
              src="/generated/qmed-logo.png"
              alt="Q-MED Devices"
              width={180}
              height={54}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              Qatar Medical Solutions WLL
              <br />
              Professional biomedical equipment
              <br />
              distribution since 2018
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/catalog"
                  className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors"
                >
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors"
                >
                  Request Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Doha, Qatar</li>
              <li>
                <a
                  href="tel:+97444123456"
                  className="hover:text-[#1E3A8A] transition-colors"
                >
                  +974 4412 3456
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@qmedqatar.com"
                  className="hover:text-[#1E3A8A] transition-colors"
                >
                  info@qmedqatar.com
                </a>
              </li>
              <li className="text-xs text-gray-500 mt-2">
                Emergency Support: +974 5555 1234
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wide">
              Certifications
            </h4>
            <div className="flex flex-wrap gap-3">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-xs font-bold text-[#8B1538]">ISO</span>
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-xs font-bold text-[#8B1538]">CE</span>
              </div>
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-xs font-bold text-[#8B1538]">QMH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Qatar Medical Solutions WLL. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-sm text-gray-500 hover:text-[#1E3A8A] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-sm text-gray-500 hover:text-[#1E3A8A] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Brand Elements */}
      <div className="absolute bottom-4 left-4 opacity-10 pointer-events-none">
        <div className="w-12 h-12 rounded-full border-4 border-[#8B1538]"></div>
      </div>
      <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none">
        <div className="w-12 h-12 rounded-full border-4 border-[#8B1538]"></div>
      </div>
    </footer>
  );
}
