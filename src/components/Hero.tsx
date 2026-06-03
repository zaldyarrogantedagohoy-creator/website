import "../styles/Hero.css";
import profile from "../assets/logo/zad.png";

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-left">
          <img src={profile} alt="Zaldy" className="hero-photo" />

          <div className="name-tag">Zaldy Arrogante Dagohoy</div>
        </div>

        <div className="hero-right">
          <div className="hero-dots">• • •</div>

          <div className="role-badge">
            [ PRODUCT_DESIGNER && FRONTEND_DEV ]
          </div>

          <h1 className="hero-title">
            Crafting digital
            <br />
            <span>experiences</span> that
            <br />
            matter
          </h1>

          <p className="hero-description">
            {"/* I'm Zaldy, a creative developer with a Bachelor's Degree in Technical-Vocational Teacher Education major in Computer Programming. */"}
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              ./VIEW_PROJECTS
            </a>

            <a href="#contact" className="secondary-btn">
              PING_ME
            </a>
          </div>
        </div>
      </section>

      <section className="hero-stats">
        <div className="hero-stat-box">
          <h2>
            30<span>+</span>
          </h2>
          <p>PROJECTS_SHIPPED</p>
        </div>

        <div className="hero-stat-box">
          <h2>
            18<span>+</span>
          </h2>
          <p>HAPPY_CLIENTS</p>
        </div>

        <div className="hero-stat-box">
          <h2>
            4<span>yrs</span>
          </h2>
          <p>EXPERIENCE</p>
        </div>

        <div className="hero-stat-box">
          <h2>847</h2>
          <p>CUPS_OF_COFFEE</p>
        </div>
      </section>
    </>
  );
}

export default Hero;