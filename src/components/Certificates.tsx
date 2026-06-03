import { useState } from "react";
import "../styles/Certificates.css";

import cert1 from "../assets/certificates/certificate-1.png";
import cert2 from "../assets/certificates/certificate-2.png";
import cert3 from "../assets/certificates/certificate-3.png";

type Certificate = {
  id: number;
  image: string;
  className: string;
  label: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    image: cert1,
    className: "cert-one",
    label: "CERTIFIED",
  },
  {
    id: 2,
    image: cert2,
    className: "cert-two",
    label: "VERIFIED",
  },
  {
    id: 3,
    image: cert3,
    className: "cert-three",
    label: "ACHIEVED",
  },
];

function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="certificates">
      <div className="cert-header">
        <h2>
          <span>$ ⌘ VERIFIED_CREDENTIALS</span>
          <b>// certificates</b>
        </h2>

        <p>// Click any certificate to view it full-screen.</p>
      </div>

      <div className="cert-wall">
        {certificates.map((cert) => (
          <button
            key={cert.id}
            className={`cert-card ${cert.className}`}
            onClick={() => setSelected(cert)}
          >
            <img src={cert.image} alt={`Certificate ${cert.id}`} />
            <span className="cert-label">{cert.label}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="cert-modal" onClick={() => setSelected(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-close" onClick={() => setSelected(null)}>
              ✕
            </button>

            <img src={selected.image} alt="Selected certificate" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;