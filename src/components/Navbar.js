import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const closeMenu = () => {
    setExpand(false);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "navbar-scrolled" : "navbar-custom"}
    >
      <Container className="navbar-wrapper" >
            {/* Logo */}
         <Navbar.Brand
          as={Link}
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
         >
          <img
            src={logo}
            className="logo-img"
            alt="logo"
          />
         </Navbar.Brand>

      

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler"
          onClick={() => setExpand(expand ? false : true)}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>

        {/* Navigation */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links">

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={closeMenu}
                className={location.pathname === "/" ? "active-nav" : ""}
              >
                <AiOutlineHome />
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={closeMenu}
                className={location.pathname === "/about" ? "active-nav" : ""}
              >
                <AiOutlineUser />
                <span>About</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={closeMenu}
                className={location.pathname === "/project" ? "active-nav" : ""}
              >
                <AiOutlineFundProjectionScreen />
                <span>Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={closeMenu}
                className={location.pathname === "/resume" ? "active-nav" : ""}
              >
                <CgFileDocument />
                <span>Resume</span>
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;