import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logoimg from "../../assets/logo.png"
import "./index.css";


function NavTop() {
    const [toogleMenu, setToogleMenu] = useState(false);

    function toogleOpen() {
        setToogleMenu(true);
      }
    
      function toogleClose() {
        setToogleMenu(false);
      }

      if (toogleMenu) {
        return (
          <>
            <NavTop />
            <div className="menu">
              <Container fluid className="menu-close">
                <button className="toogle-menu" onClick={toogleClose}>
                  <GrClose />
                </button>
                <div className="menu-list">
                  <NavLink to="/" onClick={toogleClose}>
                    Home
                  </NavLink>
                  <NavLink to="/login" onClick={toogleClose}>
                    Login
                  </NavLink>
                  <NavLink to="/signup" onClick={toogleClose}>
                    Signup
                  </NavLink>
                  <NavLink to="/cart" onClick={toogleClose}>
                  Cart
                  </NavLink>
                  <NavLink to="/aboutus" onClick={toogleClose}>
                    About Us
                  </NavLink>
                </div>
              </Container>
            </div>
          </>
        );
      }

      return (
        <>
          <Navbar className="navtop" expand="lg">
            <Container fluid className="px-4">
              <Navbar.Brand className="navtop-brand">
                <Link to="/" >
                <i id="normal"> Git Glow</i>
              <div className="logo-container" > <img src={logoimg} alt="Logo" className="logo-image" /> </div>
                </Link>
              </Navbar.Brand>
              <button className="toogle-menu" onClick={toogleOpen}>
                {/* <FaAlignRight /> */}
              </button>
              <Nav className="navtop-list">
                <Nav.Link className="pe-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="">
                  <NavLink
                    to="/Login"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Log In
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="">
                  <NavLink
                    to="/Signup"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Sign Up
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="">
                  <NavLink
                    to="/cart"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Cart
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    to="/Aboutus"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    About Us
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
    }
    
    export default NavTop;