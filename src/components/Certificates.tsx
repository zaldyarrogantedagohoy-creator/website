import { useState } from "react";
import "../styles/Certificates.css";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Web Development Certification",
    issuer: "Tech Academy",
    year: "2025",
  },
  {
    id: 2,
    title: "React & TypeScript",
    issuer: "Udemy",
    year: "2025",
  },
  {
    id: 3,
    title: "UI/UX Design",
    issuer: "Coursera",
    year: "2024",
  },
  {
    id: 4,
    title: "Database Management",
    issuer: "Google",
    year: "2024",
  },
];

function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="certificates">
      <div className="section-header">
        <span className="section-tag">ACHIEVEMENTS</span>
        <h2>Certificates</h2>
      </div>

      <div className="certificate-grid">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="certificate-card"
            onClick={() => setSelected(cert)}
          >
            <div className="certificate-icon">🏆</div>

            <h3>{cert.title}</h3>

            <p>{cert.issuer}</p>

            <span>{cert.year}</span>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="certificate-modal"
          onClick={() => setSelected(null)}
        >
          <div
            className="certificate-preview"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="preview-header">
              <h2>{selected.title}</h2>

              <button onClick={() => setSelected(null)}>
                ✕
              </button>
            </div>

            <div className="certificate-paper">
              <h1>CERTIFICATE</h1>

              <p>This certifies that</p>

              <h3>Zaldy Dagohoy</h3>

              <p>has successfully completed</p>

              <h2>{selected.title}</h2>

              <div className="certificate-footer">
                <span>{selected.issuer}</span>
                <span>{selected.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;