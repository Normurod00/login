import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-black.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container py-2">
        <Link
          to="/"
          className="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <img src={logo} alt="" width={150} className="logo" />
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link
            to="../login"
            className="me-3 py-2 link-body-emphasis text-decoration-none"
          >
            Login
          </Link>
          <Link
            to="../register"
            className="me-3 py-2 link-body-emphasis text-decoration-none"
          >
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
