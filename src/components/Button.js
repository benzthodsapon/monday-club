import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Button.css";

function Button() {
  return (
    <>
      <Link to="Launch">
        <button className="btn">
          <Icons.FaRegSmileBeam />
          <span>Launch App</span>
        </button>
      </Link>
    </>
  );
}

export default Button;
