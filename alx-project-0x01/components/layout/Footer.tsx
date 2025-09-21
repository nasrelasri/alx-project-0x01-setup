import React from 'react';
import Link from 'next/link';

interface FooterProps {
  companyName?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'My Company',
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {companyName}
            </h3>
            <p className="text-gray-600 text-sm">
              Building amazing web experiences with modern technologies.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/users" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Users
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <p className="text-gray-600 text-sm">
              Email: contact@example.com
            </p>
            <p className="text-gray-600 text-sm">
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {year} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
