// app/components/Footer.js
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Logo and Description */}
          <div className="lg:col-span-2 pr-8">
            <div className="flex items-center mb-4">
              {/* ===> SPACE FOR YOUR LOGO <=== */}

              <span className="text-2xl font-bold text-white">Nivaan</span>
            </div>
            <p className="text-gray-400 mb-2">
              Every Mind Deserves a New Dawn.
            </p>
            <p className="text-gray-400 text-sm">
              Supporting student mental health with culturally-adapted,
              accessible care.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Link
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/help"
                  className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/crisis-resources"
                  className="hover:text-white transition-colors">
                  Crisis Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {/* ===> SPACES FOR SOCIAL LOGOS <=== */}
              {/* Twitter */}
              <div>
                <div className="w-7 h-7 bg-gray-800 rounded-md cursor-pointer">
                  <div className="flex justify-center items-center">
                    <Image
                      src="/twitter.png"
                      alt="Rising Graph"
                      width={15}
                      height={15}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
              {/* LinkedIn */}
              <div>
                <div className="w-7 h-7 bg-gray-800 rounded-md cursor-pointer">
                  <div className="flex justify-center items-center">
                    <Image
                      src="/linkedin.png"
                      alt="Rising Graph"
                      width={15}
                      height={15}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
              {/* Instagram */}
              <div>
                <div className="w-7 h-7 bg-gray-800 rounded-md cursor-pointer">
                  <div className="flex justify-center items-center">
                    <Image
                      src="/instagram.png"
                      alt="Rising Graph"
                      width={15}
                      height={15}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Mental health support that understands you.
            </p>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nivaan. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
