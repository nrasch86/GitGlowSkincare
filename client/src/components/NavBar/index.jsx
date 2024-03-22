import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
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
                  <NavLink to="/Login" onClick={toogleClose}>
                    Login
                  </NavLink>
                  <NavLink to="/Signup" onClick={toogleClose}>
                    Signup
                  </NavLink>
                  <NavLink to="/Profile" onClick={toogleClose}>
                    Profile
                  </NavLink>
                  <NavLink to="/Aboutus" onClick={toogleClose}>
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
                <Link to="/">
                  GIt<i id="normal"> Glow</i>.
                </Link>
              </Navbar.Brand>
              <button className="toogle-menu" onClick={toogleOpen}>
                <FaAlignRight />
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
                    Login
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="">
                  <NavLink
                    to="/Signuo"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Signup
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="">
                  <NavLink
                    to="/Profile"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Profile
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