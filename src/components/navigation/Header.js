import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "../../styles/components/Header.module.scss";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
        setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };


  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <NavLink to="/" className={classes.header__content__logo}>
          Yann Tarot
        </NavLink>
        <nav
          className={`${classes.header__content__nav} ${
              menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
              <li  className="navlinks" >
                <NavLink to="/portfolio" onClick={menuToggleHandler} activeClassName="nav-active">
                    Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/competences" onClick={menuToggleHandler} activeClassName="nav-active">
                    Compétences
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={menuToggleHandler} activeClassName="nav-active">
                    Contact
                </NavLink>
              </li>
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
