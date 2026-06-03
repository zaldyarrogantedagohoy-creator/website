import "../styles/About.css";

function About() {
  const skills = [
    "◉ UI Design",
    "◇ Prototyping",
    "✺ Frontend Dev",
    "⌕ User Research",
    "✓ Accessibility",
    "◈ Performance",
  ];

  return (
    <section id="about" className="about">
      <h2>
        <span>//</span> about_me
      </h2>

      <div className="about-wrapper">
        <div className="about-left">
          <p>
            I'm Zaldy, a creative developer with a technical background in
            computer programming and a passion for designing intuitive digital
            products.
          </p>

          <p>
            I blend UX thinking, frontend craftsmanship, and polished visual
            design to build modern web experiences that feel thoughtful,
            accessible, and easy to use.
          </p>

          <div className="about-skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-logo">ZD</div>

          <h3>Zaldy Dagohoy</h3>

          <h4>
            PRODUCT_DESIGNER · <br />
            FRONTEND_DEV
          </h4>

          <ul>
            <li>⌖ Davao City, PH</li>
            <li>⌘ BTVTED-CP</li>
            <li>✉ zaldy.dagohoy.a@gmail.com</li>
          </ul>

          <a href="#contact">HIRE_ME() ↗</a>
        </div>
      </div>
    </section>
  );
}

export default About;