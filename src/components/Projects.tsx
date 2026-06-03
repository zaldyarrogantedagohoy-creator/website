import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern personal portfolio website."
    },
    {
      title: "Inventory System",
      description:
        "Inventory management application."
    },
    {
      title: "Landing Page",
      description:
        "Responsive business landing page."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;