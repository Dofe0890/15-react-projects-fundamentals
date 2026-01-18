import React from "react";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strip</h3>
        <button onClick={openSidebar} className="toggle-btn">
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
