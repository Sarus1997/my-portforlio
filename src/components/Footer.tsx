import React from 'react';
import '../scss/footer.scss';

import { Facebook, X, Instagram, Linkedin } from 'lucide-react';

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
          <a href="#" className="facebook" aria-label="Facebook">
            <Facebook size={24} />
          </a>
          <a href="https://x.com" className="x-icon" aria-label="X" target="_blank" rel="noopener noreferrer">
            <X size={24} />
          </a>

          <a href="#" className="instagram" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" className="linkedin" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
