import { NavLink } from "react-router-dom";
import React from "react"
import styles from "./Navbar.module.css";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ];

  return (
    <nav className={styles.navBar}>
      <ul className={styles.links}>
        {links.map(link => {
          return (
            <li key={link.id} className={styles.link}>
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}
export default Navbar
