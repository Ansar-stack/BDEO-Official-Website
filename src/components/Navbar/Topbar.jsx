import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-zinc-800 text-white text-sm hidden  md:flex">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 px-4 md:px-16 lg:px-24 xl:px-32 py-2">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <FaPhone className="text-xs" />
            <a href="tel:+930703634592" className="hover:text-blue-400">
              +93 0700070442
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-xs" />
            <a
              href="mailto:bdo.org.af@gmail.com"
              className="hover:text-blue-400"
            >
              bdeo.af@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xs" />
            <span>Kandahar, Afghanistan</span>
          </div>
        </div>

        {/* Right: Social Icons (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.facebook.com/"
            className="hover:text-blue-500 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/"
            className="hover:text-sky-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
