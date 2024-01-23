import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#FAD000] sm:flex px-[10%] py-[2%]">
      <img src={Logo} alt="Alemeno" className="max-sm:mx-auto"/>
      <div className="flex max-sm:justify-center max-sm:mt-[3%]">
        <Link to="/" className="sm:ml-[75px] flex items-center">
          <div className="font-roboto font-bold">Courses</div>
        </Link>
        <Link to="/account" className="ml-[50px] flex items-center">
          <div className="font-roboto font-bold">My profile</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
