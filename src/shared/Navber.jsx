import { Home, Clock, BarChart2 } from "lucide-react";
import MyNavLink from "../shared/MyNavLink";

export default function Navbar() {
  return (
    <div className="w-full bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">

        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="KeenKeeper Logo"
            className="h-5 sm:h-7 md:h-8 w-auto"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <MyNavLink to="/">
            <Home size={18} />
            <span className="hidden sm:inline">Home</span>
          </MyNavLink>

          <MyNavLink to="/timeline">
            <Clock size={18} />
            <span className="hidden sm:inline">Timeline</span>
          </MyNavLink>

          <MyNavLink to="/stats">
            <BarChart2 size={18} />
            <span className="hidden sm:inline">Stats</span>
          </MyNavLink>
        </div>
      </div>
    </div>
  );
}