// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdArrowRightAlt, MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
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
      <nav className={`lg:hidden fixed-navbar ${scrolled ? "hidden" : ""}`}>
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
                  <li className="text-white">About Us</li>
                </Link>
                <Link to="/studyDistntion" onClick={menuClose}>
                  <li className="text-white">Study Distention</li>
                </Link>
                <Link to="/gallery" onClick={menuClose}>
                  <li className="text-white">Gallery</li>
                </Link>
                <Link to="/blog" onClick={menuClose}>
                  <li className="text-white">Blogs</li>
                </Link>

                <Link to="/contactUs">
                  <li className="text-white">Contact us</li>
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
        <div className="hidden lg:block w-full absolute z-50">
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
                  <li className="text-[#F6941E] ">Home</li>
                </Link>
                <Link to="/About" onClick={menuClose}>
                  <li className="text-white">About Us</li>
                </Link>
                <Link to="/studyDistention" onClick={menuClose}>
                  <li className="flex items-center justify-between text-white">
                    Study Distention
                    <IoIosArrowDown />
                  </li>
                </Link>
                <Link to="/gallery" onClick={menuClose}>
                  <li className="flex items-center justify-between text-white">
                    Gallery
                    <IoIosArrowDown />
                  </li>
                </Link>
                <Link to="/blog" onClick={menuClose}>
                  <li className="text-white">Blogs</li>
                </Link>

                <Link to="/ContactUs">
                  <li className="text-white">Contact us</li>
                </Link>

                {/* <Link to="/blogs" onClick={menuClose}>
                  <li>Blogs</li>
                </Link> */}
              </div>
            </div>

            <button className="homeLargeAppoinMent flex items-center justify-between text-[#F6941E]">
              Enquire Now <MdArrowRightAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
