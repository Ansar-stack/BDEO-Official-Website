import {
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
  FaGraduationCap,
  FaLeaf,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaHandsHelping,
} from "react-icons/fa";
import Button from './Button'
import {useNavigate} from 'react-router-dom'

const quickLinks = [
  { label: "About Us", path: "/about-us" },
  { label: "What We Do", path: "/what-we-do" },
  { label: "Our Team", path: "/team" },
  { label: "FAQs", path: "/faqs" },
  { label: "Support", path: "/support-us" },
];

const whatWeDo = [
  { label: "Education", icon: FaGraduationCap },
  { label: "Health", icon: FaHeartbeat },
  { label: "Sustainability", icon: FaLeaf },
  { label: "Relief", icon: FaHandsHelping },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gradient-to-r from-[#0b1220] to-[#0f1b2e] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo */}
          <div>
            <div className="w-22 h-25 p-5 bg-blue-600 rounded-lg self-start flex items-center justify-center place-self-start text-white font-bold text-xl mb-4">
              B.D.E.O
            </div>
            <p className="text-sm">
              Bost Development and Educational Organization (BDEO) is a dynamic, non-profit organization dedicated to addressing humanitarian needs in Afghanistan's Southern regions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <FaChevronRight className="text-blue-500 text-xs" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-white font-semibold mb-4">What We Do</h3>
            <div className="grid grid-cols-2 gap-3">
              {whatWeDo.map((item, index) => (
                <a
                  key={index}
                  href="/what-we-do"
                  className="flex items-center gap-2 p-2 rounded-md bg-white/5 hover:bg-white/10 transition text-sm"
                >
                  <item.icon className="text-blue-500" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="flex items-start gap-3 text-sm mb-3">
              <FaMapMarkerAlt className="mt-1 text-blue-500" />
              <span>District 6th, Dand Chowk, Kandahar, Afghanistan</span>
            </div>
            <div className="flex items-center gap-3 text-sm mb-3">
              <FaPhoneAlt className="text-blue-500" />
              <div>
                <a href="tel:+93700070442">+93700070442</a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm mb-3">
              <FaEnvelope className="text-blue-500" />
              <span>bdeo.afg@gmail.com</span>
            </div>
            <Button text="Support Our Work" classes={'primary-btn'} onClick={()=>navigate('/donate-now')}/>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs gap-4">
          <p>© 2025 Bost Development and Educational Organization (BDEO). All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/registration" className="hover:text-white">
              Registration No. 5916
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;