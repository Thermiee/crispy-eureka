import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../assets";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <nav className="bg-black border-b border-gray-300 shadow-sm">
      <div className=" mx-auto text-white px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 ml">
            <Link to="/">
              <img className="h-8" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="justify-center flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/") ? "text-primary" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/apartment"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/apartment") ? "text-primary" : ""
                }`}
              >
                Apartments
              </Link>
              <Link
                to="/about-us"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/faqs") ? "text-primary" : ""
                }`}
              >
                About Us
              </Link>
              <Link
                to="/faqs"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/faqs") ? "text-primary" : ""
                }`}
              >
                FAQs
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/contact") ? "text-primary" : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive("/")
                ? "text-primary"
                : "text-tertiary hover:bg-primary hover:text-white"
            }`}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/apartment"
            onClick={toggleMobileMenu}
            className={`block px-3 py-2 rounded-md w-[100px] text-base font-medium ${
              isActive("/shortlets")
                ? "text-primary"
                : "text-tertiary hover:bg-primary hover:text-white"
            }`}
          >
            Apartments
          </Link>
          <Link
            to="/about-us"
            onClick={toggleMobileMenu}
            className={`block px-3 py-2 rounded-md  w-[100px]  text-base font-medium ${
              isActive("/faqs")
                ? "textprimary0"
                : "text-tertiary hover:bg-primary hover:text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/faqs"
            onClick={toggleMobileMenu}
            className={`block px-3 py-2 rounded-md  w-[100px]  text-base font-medium ${
              isActive("/faqs")
                ? "textprimary0"
                : "text-tertiary hover:bg-primary hover:text-white"
            }`}
          >
            FAQs
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className={`block px-3 py-2 rounded-md  w-[100px]  text-base font-medium ${
              isActive("/contact")
                ? "text-primary"
                : "text-tertiary hover:bg-primary hover:text-white"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
