import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import ProjectsDataFR from "../data/ProjectsDataFR.json";
import ProjectsDataEN from "../data/ProjectsDataEN.json";

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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
