// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

import { AppContext } from "../../../store/AppContext";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
  };
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/About";
  const isBlogsPage = location.pathname === "/blogs";
  const isContactPage = location.pathname === "/ContactUs";
  const isPhotoGallery = location.pathname === "/photo-gallery";
  const isVideoGallery = location.pathname === "/video-gallery";
  const isBlog = location.pathname === "/blog/:blogId";
  const { isDropdown2Open, setIsDropdown2Open } = useContext(AppContext);

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

  // form

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Fixed Navbar */}
      {/* mobile */}

      {/* large screen nav */}
      <div>
        <div className={`hidden  lg:block w-full z-50  bg-[#F6941E]/[.3] `}>
          <div className="ToplargeScreenMenu bg-transparent font-helvetica font-normal">
            <div>
              <div className="TopmobileMenuParent ">
                <Link to="/" onClick={menuClose}>
                  <li
                    className={` ${
                      isHomePage
                        ? "text-[#F6941E] hover:text-[#F6941E]"
                        : "text-black hover:text-[#F6941E]"
                    }`}
                  >
                    Phone Bd
                  </li>
                </Link>

                <Link to="" onClick={menuClose}>
                  <li
                    className={` ${
                      isHomePage
                        ? "text-black"
                        : isAboutPage
                        ? "text-[#f6941e]"
                        : "text-black"
                    }`}
                  >
                    Phone Dubai
                  </li>
                </Link>

                {/* Other Menu Items */}
                <li>
                  <Link
                    to=""
                    className={` ${
                      isHomePage
                        ? "text-black"
                        : isBlogsPage
                        ? "text-orange-500"
                        : "text-black"
                    }`}
                  >
                    Phone USA
                  </Link>
                </li>
              </div>
            </div>

            <div className=" ">
              <div className="flex    gap-x-[10px]">
                <a href="">
                  <FaFacebook size={20} className="footerSocailIcon" />
                </a>
                <a href="">
                  <FaInstagram size={20} className="footerSocailIcon" />
                </a>

                <a href="">
                  <FaWhatsapp size={20} className="footerSocailIcon " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
