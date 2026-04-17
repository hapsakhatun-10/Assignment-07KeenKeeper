import { NavLink } from "react-router-dom";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-md transition ${
          isActive
            ? "bg-green-900 text-white"
            : "text-gray-600 hover:text-green-700"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;