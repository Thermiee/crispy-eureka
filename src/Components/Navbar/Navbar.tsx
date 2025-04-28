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
                to="/league"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/apartment") ? "text-primary" : ""
                }`}
              >
                League
              </Link>
              <Link
                to="/team"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/faqs") ? "text-primary" : ""
                }`}
              >
                Team
              </Link>
              <Link
                to="/faqs"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/faqs") ? "text-primary" : ""
                }`}
              ></Link>

              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium ${
                  isActive("/contact") ? "text-primary" : ""
                }`}
              ></Link>
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
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } fixed inset-0 z-50 bg-black/30 backdrop-blur-lg lg:hidden`}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 p-2 text-white hover:text-gray-200"
        >
          <svg
            className="h-6 w-6"
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
        <div className="flex items-center justify-center h-full">
          <div className="space-y-6 text-center">
            <Link
              to="/"
              className={`block px-3 py-2 text-2xl font-medium ${
                isActive("/")
                  ? "text-primary"
                  : "text-white hover:text-primary/80"
              }`}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/league"
              onClick={toggleMobileMenu}
              className={`block px-3 py-2 text-2xl font-medium ${
                isActive("/apartment")
                  ? "text-primary"
                  : "text-white hover:text-primary/80"
              }`}
            >
              League
            </Link>
            <Link
              to="/team"
              onClick={toggleMobileMenu}
              className={`block px-3 py-2 text-2xl font-medium ${
                isActive("/about-us")
                  ? "text-primary"
                  : "text-white hover:text-primary/80"
              }`}
            >
              Team
            </Link>
            <Link
              to="/faqs"
              onClick={toggleMobileMenu}
              className={`block px-3 py-2 text-2xl font-medium ${
                isActive("/faqs")
                  ? "text-primary"
                  : "text-white hover:text-primary/80"
              }`}
            ></Link>
            <Link
              to="/contact"
              onClick={toggleMobileMenu}
              className={`block px-3 py-2 text-2xl font-medium ${
                isActive("/contact")
                  ? "text-primary"
                  : "text-white hover:text-primary/80"
              }`}
            ></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
