import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line"></div>

      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">ZD</div>
          <span>zaldy_dagohoy</span>
        </div>

        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#projects">Work</a>
          <a href="#certificates">Certificates</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Section</a>
        </nav>
      </div>

      <div className="footer-bottom">
        © 2026 Zaldy Dagohoy — built with
        <span className="heart"> ♥ </span>
        for the creative community · $ exit 0
      </div>
    </footer>
  );
}

export default Footer;