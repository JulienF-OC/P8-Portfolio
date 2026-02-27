import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import ProjectsDataFR from "../data/ProjectsDataFR.json";
import ProjectsDataEN from "../data/ProjectsDataEN.json";

import bookiImg from "../assets/Booki.png";
import sbImg from "../assets/SB.png";
import ninaImg from "../assets/Nina.png";
import kasaImg from "../assets/KASA.png";
import mvgImg from "../assets/MVG.png";
import movieExplorerimg from "../assets/movieExplorer.png"

const images = {
  booki: bookiImg,
  sb: sbImg,
  nina: ninaImg,
  kasa: kasaImg,
  mvg: mvgImg,
  movieExplorer: movieExplorerimg
};

function Projects() {
  const { t, i18n } = useTranslation();

  const projectsData = useMemo(() => {
    return i18n.language === "en" ? ProjectsDataEN : ProjectsDataFR;
  }, [i18n.language]);

  return (
    <section id="Projects">
      <div className="mb-5 text-center">
        <h1 className="uppercase font-bold text-3xl mb-6">
          {t("projects.title")}
        </h1>

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

              <h2 className="font-bold text-xl mb-2">{project.title}</h2>

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
              </ul>

              <div className="flex gap-2 justify-center">
                {project.repoLink && (
                  <a
                    className="btn btn-sm btn-white"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.repo")}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
