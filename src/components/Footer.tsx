import React from 'react';
import '../scss/footer.scss';

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Section */}
          <div className="footer-section">
            <h3>บริษัทของคุณ</h3>
            <p>สร้างนวัตกรรมเพื่ออนาคตที่ดีกว่า</p>
            <p>&copy; {new Date().getFullYear()} บริษัทของคุณ สงวนลิขสิทธิ์</p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3>เมนูลัด</h3>
            <ul className="quick_links">
              <li className="active_section"><a href="/about">&nbsp; เกี่ยวกับเรา</a></li>
              <li className="active_section"><a href="/services">&nbsp; บริการ</a></li>
              <li className="active_section"><a href="/contact">&nbsp; ติดต่อเรา</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3>ติดต่อเรา</h3>
            <div className="contact-info">
              <p>123 ถนนสุขุมวิท</p>
              <p>กรุงเทพมหานคร 10110</p>
              <p>โทร: 02-123-4567</p>
              <p>อีเมล: contact@yourcompany.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          {[
            { Icon: Facebook, label: 'Facebook' },
            { Icon: Twitter, label: 'Twitter' },
            { Icon: Instagram, label: 'Instagram' },
            { Icon: Linkedin, label: 'LinkedIn' }
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer >
  );
}

export default Footer;