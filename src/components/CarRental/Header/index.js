import { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./style.css";

function Header(props) {
  const location = useLocation();
  const [scrollValue, setScrollValue] = useState();
  const ref = useRef(null);

  const handleScrollOnHome = (newScrollValue) => {
    if (newScrollValue > 100) {
      ref.current.classList.add("header-scrolled");
    } else {
      ref.current.classList.remove("header-scrolled");
    }
  };

  const handleScroll = (event) => {
    event.preventDefault();

    setScrollValue(window.scrollY);
    handleScrollOnHome(scrollValue);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      ref.current.classList.add("header-scrolled");
    } else if (location.pathname === "/CarRental") {
      handleScrollOnHome(scrollValue);
    }
  }, [location, scrollValue]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
      ref={ref}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <div className="logo me-auto">
          <h1>
            <a href=""></a>
          </h1>

          <a href=""><img src={process.env.PUBLIC_URL + "/logo.png"} alt="" className="img-fluid" /><h1 style={{ color: "white" }}>Travel2Go</h1></a>
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active me-3" : "nav-link me-3"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        {props.numOfItems > 0 ? (
          <NavLink to="/CarRental/cart" end className="book-a-table-btn">
            <i className="bx bxs-shopping-bag" style={{ fontSize: "18px" }}></i>
            <span>({props.numOfItems})</span>
          </NavLink>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
