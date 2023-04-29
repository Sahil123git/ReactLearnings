import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./user";
import Page404 from "./Page404";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="Navbar">
      <BrowserRouter>
        <hr />
        {/*Here we are linking Text with locn of page which we have done in the below code */}
        <Link to="/">Home</Link>
        <hr />
        <Link to="/about">About Us</Link>
        <hr />
        <Link to="/contact">Contact Us</Link>
        <hr />
        <Link to="/User">User</Link>
        <hr />
        <hr />

        <Routes>
          {/*Here we are linking page locn with components or content*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/User" element={<User />} />
          <Route path="/contact" element={<h1>Welcome to Contact Page</h1>} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default NavBar;
