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
    <header className="fixed top-7 left-0 w-full z-50">
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
          <CustomNavLink to="/" withGradient>Home</CustomNavLink>
          <CustomNavLink to="/about">About</CustomNavLink>
          <CustomNavLink to="/services">Services</CustomNavLink>
          <CustomNavLink to="/contact">Contact</CustomNavLink>
          <CommonButton href="https://remotecleanacademy.com/privacy-policy/" variant="solidbtn" />
        </nav>
      </div>
    </header>
  );
}
