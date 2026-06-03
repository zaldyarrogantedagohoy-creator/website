import "../styles/Testimonials.css";

type Testimonial = {
  initials: string;
  name: string;
  role: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    initials: "AR",
    name: "Ana Reyes",
    role: "Product Manager, TechStart",
    message:
      "Zaldy delivered a beautiful, well-structured interface under a tight deadline. His attention to detail and communication were exceptional.",
  },
  {
    initials: "MS",
    name: "Mark Santos",
    role: "CTO, PixelForge",
    message:
      "One of the best frontend experiences I've seen. Clean code, thoughtful design choices, and great responsiveness. Would hire again without hesitation.",
  },
  {
    initials: "LC",
    name: "Lena Cruz",
    role: "UX Lead, DesignBloom",
    message:
      "Zaldy has a rare combination of design sensibility and engineering skill. He understands both pixels and people. Truly a full-package collaborator.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-header">
        <h2>
          <span>$ ⌘ TESTIMONIALS.JSON</span>
          <b>// what_people_say</b>
        </h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <div className="quote-mark">〞</div>

            <p className="testimonial-message">{item.message}</p>

            <div className="person">
              <div className="person-avatar">{item.initials}</div>

              <div>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </div>

            <div className="stars">★★★★★</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;