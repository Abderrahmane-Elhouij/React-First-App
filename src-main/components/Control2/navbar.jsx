import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ textAlign: "center"}}>
      <button class="btn btn-success">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Animal component
        </Link>
      </button>{" "}
      &nbsp;
      <button class="btn btn-success">
        <Link
          to="/formulaire"
          style={{ color: "white", textDecoration: "none" }}
        >
          Form component
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
