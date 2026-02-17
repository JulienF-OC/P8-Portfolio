import img from "../assets/moi.jpg";
import { FolderCode, Server, LaptopMinimalCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  const aboutElements = [
    {
      id: 1,
      title: t("about.frontend.title"),
      description: t("about.frontend.description"),
      icon: <FolderCode className="text-accent scale-150" />,
    },
    {
      id: 2,
      title: t("about.backend.title"),
      description: t("about.backend.description"),
      icon: <Server className="text-accent scale-150" />,
    },
    {
      id: 3,
      title: t("about.architecture.title"),
      description: t("about.architecture.description"),
      icon: <LaptopMinimalCheck className="text-accent scale-150" />,
    },
  ];

  return (
    <section id="about">
      <div className="bg-base-300 p-10 mb-10 md:mb-15">
        <div className="mb-5 text-center">
          <h1 className="uppercase font-bold text-3xl">
            {t("about.title")}
          </h1>
        </div>

        <div className="md:h-screen flex justify-center items-center">
          <div className="hidden md:block">
            <img
              src={img}
              alt={t("about.photoAlt")}
              className="w-96 object-cover rounded-xl"
            />
          </div>

          <div className="md:ml-4 space-y-4">
            {aboutElements.map((section) => (
              <div
                key={section.id}
                className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
              >
                <div className="mb-2 md:mb-0">{section.icon}</div>
                <div className="md:ml-4 text-center md:text-left">
                  <h2 className="text-xl font-bold mb-1">
                    {section.title}
                  </h2>
                  <p className="text-sm">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
