import "../styles/Header.css";
import logo from "../assets/logo/logo.png";

function Header() {
  return (
    <header className="header">
      <a href="#home" className="header-logo">
        <img src={logo} alt="ZD Logo" />
      </a>

      <nav className="header-nav">
        <a href="#home">home</a>
        <a href="#projects">work</a>
        <a href="#certificates">certificates</a>
        <a href="#about">about</a>
      </nav>

      <div className="header-actions">
        <div className="available-badge">
          <span></span>
          AVAILABLE
        </div>

        <a href="#contact" className="contact-btn">
          CONTACT_ME()
        </a>
      </div>
    </header>
  );
}

export default Header;