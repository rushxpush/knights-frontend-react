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
        |
        {/* <NavLink to="test">
          <span className="">Test</span>
        </NavLink>
        |
        <NavLink to="react-query-test">
          <span className="">React Query Test</span>
        </NavLink>
        | */}
        <NavLink to="login">
          <span className="">Login</span>
        </NavLink>
      </nav>
    </div>
  );
}