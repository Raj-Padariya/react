import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import CommonButton from "../CommonButton/CommonButton";

export default function Header() {

    const CustomNavLink = ({ to, children, withGradient = false }) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) =>
            `transition-colors duration-300 ${
            withGradient
                ? isActive
                ? "bg-radial bg-clip-text text-transparent"
                : "hover:text-[#E79F56]"
                : isActive
                ? "bg-radial bg-clip-text text-transparent"
                : "hover:bg-radial bg-clip-text"
            }`
        }
        >
        {children}
        </NavLink>
    );
};

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-15" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 font-bold text-white text-base">
            <CustomNavLink to="/" withGradient>Home</CustomNavLink>
            <CustomNavLink to="/about">About</CustomNavLink>
            <CustomNavLink to="/services">Services</CustomNavLink>
            <CustomNavLink to="/contact">Contact</CustomNavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <CommonButton href="https://remotecleanacademy.com/privacy-policy/" variant="solidbtn" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            className="text-gray-800 text-2xl focus:outline-none"
            onClick={() =>
              document.getElementById("mobile-menu").classList.toggle("hidden")
            }
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div id="mobile-menu" className="hidden md:hidden bg-white shadow-md">
        <nav className="flex flex-col space-y-4 px-6 py-4 font-medium text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#E79F56]" : "hover:text-[#E79F56]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#E79F56]" : "hover:text-[#E79F56]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-[#E79F56]" : "hover:text-[#E79F56]"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#E79F56]" : "hover:text-[#E79F56]"
            }
          >
            Contact
          </NavLink>
          <Link
            to="/get-started"
            className="bg-[radial-gradient(88.37%_177.94%_at_98.37%_100%,_#E79F56_0%,_#E75658_100%)] text-white px-6 py-2 rounded-full text-center font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
