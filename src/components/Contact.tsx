import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2>
          <span>$ ✈ INIT_CONTACT</span>
          <b>// lets_connect()</b>
        </h2>
      </div>

      <div className="contact-box">
        <div className="contact-info">
          <h3>Got a project in mind?</h3>

          <p>
            I'm currently open to freelance opportunities, collaborations, or
            just a friendly chat. Reach out and let's build something great.
          </p>

          <a href="mailto:zaldy.dagohoy.a@gmail.com" className="email-box">
            ✉ zaldy.dagohoy.a@gmail.com
          </a>

          <div className="location">⌖ Davao City, Philippines</div>

          <div className="contact-tabs">
            <a href="mailto:zaldy.dagohoy.a@gmail.com">✉ EMAIL</a>
            <a href="#linkedin">▣ LINKEDIN</a>
            <a href="#github">⌘ GITHUB</a>
          </div>

          <div className="social-icons">
            <a href="#github">⌘</a>
            <a href="#linkedin">▣</a>
            <a href="#instagram">◎</a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="// your_name" />
          <input type="email" placeholder="// email_address" />

          <textarea placeholder="// describe_your_project..."></textarea>

          <button type="submit">SEND_MESSAGE() ↗</button>

          <p className="form-note">♙ encrypted · no spam · reply within 24h</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;