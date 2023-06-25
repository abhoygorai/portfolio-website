import NavLinks from "./NavLinks";
import logo from "../images/logo-white.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <NavLinks />
    </header>
  );
};

export default Header;
