import React from "react";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="logo">
        <h1>Mountain Travel</h1>
      </div>
      <div className="links">
        <p style={{ margin: "0 8px" }}>Tours</p>
        <p style={{ margin: "0 8px" }}>About</p>
        <p style={{ margin: "0 8px" }}>Contact us</p>
      </div>
    </div>
  );
};
export default Navbar;
