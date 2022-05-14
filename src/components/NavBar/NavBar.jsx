import "./NavBar.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBarElements">
        <Button>FiberNews</Button>
        <Button>New</Button>
        <Button>Threads</Button>
        <Button>Ask</Button>
      </div>
      <Button>Login</Button>
    </nav>
  );
};

export default NavBar;
