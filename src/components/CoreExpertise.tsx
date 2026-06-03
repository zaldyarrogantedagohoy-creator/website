import { useState } from "react";
import "../styles/CoreExpertise.css";

type Skill = {
  name: string;
  category: string;
  description: string;
  percent: number;
  icon: string;
  color: string;
};

const skills: Skill[] = [
  {
    name: "React Interfaces",
    category: "FRONTEND",
    description: "Building reusable components, dynamic pages, and smooth user interactions.",
    percent: 92,
    icon: "⚛",
    color: "#00ff88",
  },
  {
    name: "JavaScript Logic",
    category: "FRONTEND",
    description: "Writing clean JavaScript logic for dynamic and interactive experiences.",
    percent: 92,
    icon: "JS",
    color: "#00d4ff",
  },
  {
    name: "UI/UX Design",
    category: "DESIGN",
    description: "Creating clean layouts, visual systems, and user-friendly interfaces.",
    percent: 78,
    icon: "◉",
    color: "#ffc400",
  },
  {
    name: "Responsive Layout",
    category: "FRONTEND",
    description: "Building layouts that work smoothly on desktop, tablet, and mobile.",
    percent: 92,
    icon: "▯",
    color: "#00ff88",
  },
  {
    name: "Database Systems",
    category: "BACKEND",
    description: "Designing structured data, tables, and simple backend integrations.",
    percent: 60,
    icon: "▤",
    color: "#a855f7",
  },
  {
    name: "HTML & CSS Craft",
    category: "FRONTEND",
    description: "Writing semantic HTML and polished CSS for modern web interfaces.",
    percent: 92,
    icon: "</>",
    color: "#00d4ff",
  },
];

function CoreExpertise() {
  const [selected, setSelected] = useState(0);

  const active = skills[selected];

  return (
    <section id="expertise" className="expertise">
      <div className="expertise-header">
        <h2>
          <span>$ SKILL_STACK</span>
          <b>// core_expertise</b>
        </h2>

        <p>
          // Drag the cube to spin it · click any face or chart row to inspect a
          skill.
        </p>
      </div>

      <div className="expertise-layout">
        <div className="cube-area">
          <div className="cube-scene">
            <div className="skill-cube">
              {skills.map((skill, index) => (
                <button
                  key={skill.name}
                  className={`cube-face face-${index + 1}`}
                  onClick={() => setSelected(index)}
                  style={{ borderColor: skill.color }}
                >
                  <span style={{ color: skill.color }}>{skill.icon}</span>
                  <strong>{skill.name}</strong>
                  <small>{skill.category}</small>
                </button>
              ))}
            </div>
          </div>

          <p className="cube-note">// DRAG TO ROTATE · CLICK FACE TO EXPLORE</p>
        </div>

        <div className="skill-panel">
          <span className="inspect-label">$ SKILL --INSPECT</span>

          <h3>{active.name}</h3>

          <div className="category-badge">{active.category}</div>

          <p>{active.description}</p>

          <div className="skill-list">
            {skills.map((skill, index) => (
              <button
                key={skill.name}
                className={`skill-row ${selected === index ? "active" : ""}`}
                onClick={() => setSelected(index)}
              >
                <span className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </span>

                <span className="skill-name">{skill.name}</span>

                <span className="skill-bar">
                  <span
                    style={{
                      width: `${skill.percent}%`,
                      background: skill.color,
                    }}
                  ></span>
                </span>

                <strong style={{ color: skill.color }}>{skill.percent}%</strong>
              </button>
            ))}
          </div>

          <div className="skill-dots">
            {skills.map((_, index) => (
              <span
                key={index}
                className={selected === index ? "active" : ""}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreExpertise;