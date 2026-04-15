import { Home, Clock, BarChart2, Menu } from "lucide-react";
import { useState } from "react";
import MyNavLink from "../shared/MyNavLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="KeenKeeper Logo"
            className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <MyNavLink to="/">
            <Home size={18} />
            Home
          </MyNavLink>

          <MyNavLink to="/timeline">
            <Clock size={18} />
            Timeline
          </MyNavLink>

          <MyNavLink to="/stats">
            <BarChart2 size={18} />
            Stats
          </MyNavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          <MyNavLink to="/">
            <Home size={18} />
            Home
          </MyNavLink>

          <MyNavLink to="/timeline">
            <Clock size={18} />
            Timeline
          </MyNavLink>

          <MyNavLink to="/stats">
            <BarChart2 size={18} />
            Stats
          </MyNavLink>
        </div>
      )}
    </div>
  );
}