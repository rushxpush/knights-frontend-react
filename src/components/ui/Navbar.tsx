import { NavLink } from "react-router-dom";

export function Navbar() {
  return(
    <div className="navbar-container">
      <nav>
        <NavLink 
          to="/"
          className={({isActive}) => isActive ? "active" : ""}
        >
          <span className="">Home</span>
        </NavLink>
        |
        <NavLink to="list">
          <span className="">Lista</span>
        </NavLink>
      </nav>
    </div>
  );
}