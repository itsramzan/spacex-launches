import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoLogoElectron } from "react-icons/io5";

const navLinks = [
  {
    id: 1,
    to: "/",
    text: "Home",
  },
  {
    id: 2,
    to: "/launches",
    text: "Launches",
  },
];

const Navbar = () => {
  return (
    <div className="h-16 px-4 md:px-16 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
      {/* Nav logo */}
      <div>
        <Link to="/" className="flex items-center gap-2">
          <IoLogoElectron className="text-3xl" />{" "}
          <span className="text-primary text-xl font-bold">SpaceX</span>
        </Link>
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            end
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : ""
            }
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
