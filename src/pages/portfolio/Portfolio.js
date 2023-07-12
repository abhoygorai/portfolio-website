import projectData from "./projectsData.json";
import experienceData from "./experiencedata.json";
import Project from "../../components/Project";
import Experience from "../../components/Experience";
import PageHeader from "../../components/PageHeader";

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  const ExperienceList = () =>
    experienceData.map((exp, i) => (
      <Experience
        key={i}
        id={exp.id}
        title={exp.title}
        company={exp.company}
        technologies={exp.technologies}
        image={exp.image}
        color={exp.bgcolor}
        proof={exp.proof}
        description={exp.description}
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader
        title="Experience"
        description="These are my work experience"
      />
      <div className="row">
        <ExperienceList />
      </div>
      <PageHeader title="Projects" description="Coming Soon..." />
      <div className="row">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;
