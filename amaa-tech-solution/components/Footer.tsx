"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTelegramPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const router = useRouter();

  const socialLinks = [
    ["https://facebook.com", <FaFacebook size={20} />],
    ["https://twitter.com", <FaTwitter size={20} />],
    ["https://linkedin.com", <FaLinkedin size={20} />],
  ] as const;

  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-black text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">About Us</h3>
            <p className="text-gray-300 text-sm">
              Amaa Tech Solutions is a forward-thinking Ethiopian technology
              company dedicated to building innovative web and mobile
              applications, offering career-focused tutorials, and supporting
              Africa's digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ["/blogs", "Blogs"],
                ["/contact", "Contact Us"],
                ["/services", "Services"],
                ["/about", "About Us"],
              ].map(([path, label]) => (
                <li key={label}>
                  <button
                    onClick={() => router.push(path)}
                    className="hover:text-blue-400 transition duration-300"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2">
                <FaTelegramPlane className="text-blue-400" />
                <a
                  href="mailto:cstafesebiruk23@gmail.com"
                  className="hover:underline"
                >
                  cstafesebiruk23@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaTelegramPlane className="text-blue-400" />
                <a
                  href="https://t.me/amaatech1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @amaatech1
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map(([url, icon], idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition duration-300"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-300">
            <p>© 2025 Amaa Tech Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
