import { Link } from "react-router-dom";
import MonstarSuiteLogo from "../assets/logo/MonstarSuiteWhite.png";

export default function NavbarLogin() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light lg:p-20 flex lg:justify-start justify-center p-10">
      <div className="container-fluid">
        {/* <Link to="/" className="navbar-brand">
          <img
            src={MonstarSuiteLogo}
            alt="MonstarSuite Logo"
            width="200"
            height="50"
            className="d-inline-block align-text-top select-none pointer-events-none"
          />
        </Link> */}
      </div>
    </nav>
  );
}
