import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  let title: string = "Coding Assignment Kareem";

  return (
    <div className="header">
      <Link className="header-link" to={"/"}>
        <h1 className="header-title">{title}</h1>
      </Link>
    </div>
  );
}

export default Header;
