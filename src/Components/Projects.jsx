import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import ProjectsDataFR from "../data/ProjectsDataFR.json";
import ProjectsDataEN from "../data/ProjectsDataEN.json";
import bookiImg from "../assets/Booki.png";
import sbImg from "../assets/SB.png";
import ninaImg from "../assets/Nina.png";
import kasaImg from "../assets/KASA.png";
import mvgImg from "../assets/MVG.png";
import movieExplorerimg from "../assets/movieExplorer.png";

Modal.setAppElement("#root");

const images = {
  booki: bookiImg,
  sb: sbImg,
  nina: ninaImg,
  kasa: kasaImg,
  mvg: mvgImg,
  movieExplorer: movieExplorerimg,
};

const TECH_ICONS = {
  "HTML": "devicon-html5-plain colored",
  "CSS": "devicon-css3-plain colored",
  "JavaScript": "devicon-javascript-plain colored",
  "React": "devicon-react-original colored",
  "React Router": "devicon-reactrouter-plain colored",
  "Node.js": "devicon-nodejs-plain colored",
  "Express": "devicon-express-original",
  "MongoDB": "devicon-mongodb-plain colored",
  "JWT": "devicon-jsonwebtokens-plain",
  "API REST": "devicon-fastapi-plain colored",
  "REST API": "devicon-fastapi-plain colored",
  "Lighthouse": "devicon-chrome-plain colored",
  "SASS": "devicon-sass-original colored",
  "Git": "devicon-git-plain colored",
  "OMDb API": "devicon-fastapi-plain colored",
};

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    position: "relative",
    inset: "auto",
    width: "100%",
    maxWidth: 680,
    maxHeight: "90vh",
    overflowY: "auto",
    borderRadius: 16,
    padding: 0,
    border: "none",
    background: "transparent",
  },
};

function TechIcon({ tech }) {
  var iconClass = TECH_ICONS[tech];
  var cls = iconClass ? iconClass + " text-3xl" : "";
  return (
    <li className="flex flex-col items-center gap-1" title={tech}>
      {iconClass ? (
        <i className={cls} />
      ) : (
        <span className="w-8 h-8 flex items-center justify-center bg-base-300 rounded text-xs font-bold">
          {tech.slice(0, 2)}
        </span>
      )}
      <span className="text-xs text-base-content/60">{tech}</span>
    </li>
  );
}

function ProjectModal({ project, isOpen, onClose, t }) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
      closeTimeoutMS={200}
    >
      <div className="bg-base-100 rounded-2xl shadow-2xl overflow-hidden">

        {project.imageKey && images[project.imageKey] && (
          <div className="relative">
            <img
              src={images[project.imageKey]}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent" />
          </div>
        )}

        <div className="p-6">

          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost text-lg"
              aria-label="Fermer"
            >
              X
            </button>
          </div>

          {project.longDescription && (
            <p className="text-sm text-base-content/80 mb-5 leading-relaxed">
              {project.longDescription}
            </p>
          )}

          {project.features && project.features.length > 0 && (
            <div className="mb-5">
              <h4 className="font-bold text-accent uppercase text-xs tracking-widest mb-2">
                {t("projects.modal.features")}
              </h4>
              <ul className="space-y-1">
                {project.features.map((f, i) => (
                  <li key={i} className="text-sm flex gap-2 items-start">
                    <span className="text-accent mt-0.5">-</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-5">
              <h4 className="font-bold text-accent uppercase text-xs tracking-widest mb-2">
                {t("projects.modal.challenges")}
              </h4>
              <p className="text-sm text-base-content/80 leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}

          <div className="mb-5">
            <h4 className="font-bold text-accent uppercase text-xs tracking-widest mb-3">
              {t("projects.modal.stack")}
            </h4>
            <ul className="flex flex-wrap gap-4">
              {project.technologies.map((tech, i) => (
                <TechIcon key={i} tech={tech} />
              ))}
            </ul>
          </div>

          {project.skills && project.skills.length > 0 && (
            <div className="mb-5">
              <h4 className="font-bold text-accent uppercase text-xs tracking-widest mb-3">
                {t("projects.modal.skills")}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-base-content/10 text-base-content text-xs px-3 py-1 rounded-full border border-base-content/20"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3 justify-end pt-2 border-t border-base-300">
            {project.repoLink && (
              <a
                className="btn btn-sm btn-outline"
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("projects.repo")}
              </a>
            )}
            {project.demoLink && (
              <a
                className="btn btn-sm btn-accent"
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("projects.demo")}
              </a>
            )}
          </div>

        </div>
      </div>
    </Modal>
  );
}

function Projects() {
  const { t, i18n } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = useMemo(() => {
    return i18n.language === "en" ? ProjectsDataEN : ProjectsDataFR;
  }, [i18n.language]);

  return (
    <section id="Projects">
      <div className="mb-5 text-center">
        <h2 className="uppercase font-bold text-3xl mb-6">
          {t("projects.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-base-300 p-5 h-fit rounded-xl shadow-lg"
            >
              {project.imageKey && images[project.imageKey] && (
                <img
                  src={images[project.imageKey]}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
              )}
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-sm mb-3">{project.description}</p>
              <ul className="flex flex-wrap gap-2 text-xs mb-4">
                {project.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-accent text-black px-2 py-1 rounded"
                  >
                    {tech}
                  </li>
                ))}
                {project.skills?.map((skill, index) => (
                  <li
                    key={`skill-${index}`}
                    className="bg-base-content/10 text-base-content px-2 py-1 rounded border border-base-content/20"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 justify-center flex-wrap">
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => setSelectedProject(project)}
                >
                  {t("projects.details")}
                </button>
                {project.repoLink && (
                  <a
                    className="btn btn-sm btn-outline"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.repo")}
                  </a>
                )}
                {project.demoLink && (
                  <a
                    className="btn btn-sm btn-outline"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.demo")}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        t={t}
      />
    </section>
  );
}

export default Projects;