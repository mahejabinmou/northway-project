// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdArrowRightAlt, MdClose } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Navbar.css";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
  };
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleMenu = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Fixed Navbar */}

      <nav
        className={`lg:hidden fix ${scrolled ? "hidden" : ""} ${
          isHomePage ? "fixed-navbar" : ""
        }`}
      >
        <div className="navbarLeftRightSpace flex justify-between items-center bg-transparent font-helvetica">
          <div className="headerLogo ">
            <Link to="/">
              <img
                className="h-full w-full object-cover"
                src="https://i.ibb.co/7R7kn56/logo-66ced2cb8a688.webp"
                alt="brand logo"
              />
            </Link>
          </div>
          <div>
            <IoMenu
              className="text-[35px] md:text-[38px] "
              onClick={handleMenu}
            ></IoMenu>
          </div>
          {open && (
            <ul className="px-[32px] py-[12px] absolute top-0 right-0 bg-white w-[100%] z-50 transition-transform duration-1000 ease-in-out">
              <div className="pb-[30px] flex justify-between items-center border-b-2 border-gray-200">
                <div className="headerLogo">
                  <Link to="/">
                    <img
                      className="h-full w-full object-cover"
                      src="https://i.ibb.co/7R7kn56/logo-66ced2cb8a688.webp"
                      alt="brand logo"
                    />
                  </Link>
                </div>
                <div
                  className="md:text-[38px] text-[35px] font-title"
                  onClick={handleClose}
                >
                  <MdClose className="text-[#7EA254]" />
                </div>
              </div>
              <div className="mobileMenuParent">
                <Link to="/" onClick={menuClose}>
                  <li className="text-[#F6941E]">Home</li>
                </Link>
                <Link to="/About" onClick={menuClose}>
                  <li className="text-black">About Us</li>
                </Link>
                <Link to="/studyDistention" onClick={menuClose}>
                  <li className="text-black">Study Distention</li>
                </Link>
                <Link to="/gallery" onClick={menuClose}>
                  <li className="text-black">Gallery</li>
                </Link>
                <Link to="/blog" onClick={menuClose}>
                  <li className="text-black">Blogs</li>
                </Link>

                <Link to="/contactUs">
                  <li className="text-black">Contact us</li>
                </Link>

                {/* <Link to="/blogs" onClick={menuClose}>
                  <li>Blogs</li>
                </Link> */}
              </div>
            </ul>
          )}
        </div>
      </nav>
      {/* large screen nav */}
      <div>
        <div
          className={`hidden lg:block w-full z-50 ${
            isHomePage ? "absolute" : "relative"
          }`}
        >
          <div className="largeScreenMenu bg-transparent font-helvetica">
            <div className="headerLogo">
              <Link to="/">
                <img
                  className="h-full w-full object-cover"
                  src="https://i.ibb.co/7R7kn56/logo-66ced2cb8a688.webp"
                  alt="brand logo"
                />
              </Link>
            </div>

            <div>
              <div className="mobileMenuParent">
                <Link to="/" onClick={menuClose}>
                  <li
                    className={` ${
                      isHomePage ? "text-[#F6941E]" : "text-black"
                    }`}
                  >
                    Home
                  </li>
                </Link>

                <Link to="/About" onClick={menuClose}>
                  <li
                    className={` ${
                      isHomePage ? "text-white" : "text-[#F6941E]"
                    }`}
                  >
                    About Us
                  </li>
                </Link>
                <li className="relative">
                  {/* Gallery Menu Item */}
                  <button
                    onClick={toggleDropdown2}
                    className={`flex items-center ${
                      isHomePage
                        ? "text-white hover:text-[#f6941e]"
                        : "text-black hover:text-[#f6941e]"
                    }`}
                  >
                    Study Distention
                    {isDropdown2Open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdown2Open && (
                    <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                      <li className="px-4 py-2 hover:bg-[#f6941e] hover:text-white">
                        <Link to="/studyDistention">Study Distention</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#f6941e] hover:text-white">
                        <Link to="/studyDistention2">Study Distention 2</Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Other Menu Items */}
                <li className="relative">
                  {/* Gallery Menu Item */}
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center ${
                      isHomePage
                        ? "text-white hover:text-[#f6941e]"
                        : "text-black hover:text-[#f6941e]"
                    }`}
                  >
                    Gallery
                    {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                      <li className="px-4 py-2 hover:bg-[#f6941e] hover:text-white">
                        <Link to="/photo-gallery">Photo Gallery</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#f6941e] hover:text-white">
                        <Link to="/video-gallery">Video Gallery</Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Other Menu Items */}
                <li>
                  <Link
                    to="/blogs"
                    className={` ${
                      isHomePage
                        ? "text-white hover:text-[#f6941e]"
                        : "text-black hover:text-[#f6941e]"
                    }`}
                  >
                    Blogs
                  </Link>
                </li>
                <Link to="/ContactUs">
                  <li
                    className={` ${
                      isHomePage
                        ? "text-white hover:text-[#f6941e]"
                        : "text-black hover:text-[#f6941e]"
                    }`}
                  >
                    Contact us
                  </li>
                </Link>
                {/* <Link to="/blogs" onClick={menuClose}>
                  <li>Blogs</li>
                </Link> */}
              </div>
            </div>

            <button className="homeLargeAppoinMent flex items-center justify-between text-[#F6941E] bg-white">
              Enquire Now <MdArrowRightAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
