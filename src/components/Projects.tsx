import "../styles/Projects.css";

type Project = {
  type: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  samples: string;
  year: string;
  className: string;
};

type Workflow = {
  number: string;
  title: string;
  subtitle: string;
  icon: string;
  className: string;
};

const projects: Project[] = [
  {
    type: "DESIGN",
    title: "Design Projects",
    description:
      "Creative UI/UX solutions focused on user-centered design, accessibility, and high-fidelity prototyping.",
    icon: "◉",
    tags: ["Figma", "UI/UX", "Visual Design"],
    samples: "3 samples",
    year: "2024",
    className: "design",
  },
  {
    type: "RESEARCH",
    title: "Research Projects",
    description:
      "Evidence-based case studies and market analysis to drive product strategy and user insights.",
    icon: "⌕",
    tags: ["User Testing", "Analytics", "Strategy"],
    samples: "3 samples",
    year: "2024",
    className: "research",
  },
  {
    type: "DEVELOPMENT",
    title: "Development Projects",
    description:
      "Scalable web applications and frontend architectures built with performance and clean code in mind.",
    icon: "</>",
    tags: ["React", "Node.js", "TypeScript"],
    samples: "3 samples",
    year: "2024",
    className: "development",
  },
];

const workflow: Workflow[] = [
  {
    number: "01",
    title: "discover()",
    subtitle: "research & strategy",
    icon: "💡",
    className: "flow-design",
  },
  {
    number: "02",
    title: "design()",
    subtitle: "wireframes & prototypes",
    icon: "✏️",
    className: "flow-research",
  },
  {
    number: "03",
    title: "build()",
    subtitle: "clean, fast code",
    icon: "💻",
    className: "flow-dev",
  },
  {
    number: "04",
    title: "deploy()",
    subtitle: "launch & iterate",
    icon: "🚀",
    className: "flow-deploy",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>
          <span>$ 📁 PORTFOLIO</span>
          <b>// featured_projects</b>
        </h2>

        <p>
          // Click a folder to explore work samples across design, research, and
          development.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`project-card ${project.className}`}
          >
            <div className="project-top">
              <div className="folder-icon">
                <span>{project.icon}</span>
              </div>

              <div className="project-type">{project.type}</div>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-meta">
              <span>◈ {project.samples}</span>
              <span>◷ {project.year}</span>
            </div>

            <button className="open-btn">&gt; open samples</button>
          </article>
        ))}
      </div>

      <div className="workflow-box">
        <span className="workflow-label">WORKFLOW</span>

        <h3>HOW_I_WORK()</h3>

        <div className="workflow-grid">
          {workflow.map((step, index) => (
            <div key={step.number} className={`workflow-step ${step.className}`}>
              {index !== workflow.length - 1 && <div className="connector" />}

              <div className="workflow-orb">
                <span>{step.icon}</span>
              </div>

              <h4>{step.number}</h4>

              <h5>{step.title}</h5>

              <p>{step.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;