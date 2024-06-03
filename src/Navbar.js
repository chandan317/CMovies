import { BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
function Navbar() {
  return (
    <div className="nav">
      <BrowserRouter>
        <img
          width="100px"
          height="40px"
          src="https://logos-world.net/wp-content/uploads/2022/06/CMovies-Logo.png"
          alt=""
        />
        <div className="link">
          <NavLink>Home</NavLink>
        </div>
        <div className="link">
          <NavLink>TV Shows</NavLink>
        </div>
        <div className="link">
          <NavLink>Categories</NavLink>
        </div>
        <div className="link">
          <NavLink>Login</NavLink>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default Navbar;
