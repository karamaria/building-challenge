import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Logo</h1>
        <div className="logo-image">
          <div className="logo-image-placeholder"></div>
        </div>
      </div>
      <nav className="nav-links">
        <Link to="/bonus">Link</Link>
        <Link to="/bonus">Link</Link>
        <Link to="/bonus">Link</Link>
      </nav>
    </header>
  );
};

export default Header;