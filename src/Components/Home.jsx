import img from "../assets/moi.jpg";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          {t("home.greeting")} <br />
          {t("home.intro")}{" "}
          <span className="text-accent">
            {t("home.name")}
          </span>
        </h1>

        <p className="my-4 text-md text-center md:text-left">
          {t("home.description.line1")} <br />
          {t("home.description.line2")} <br />
          {t("home.description.line3")}
        </p>

        <a href="#contact" className="btn btn-accent text-center md:w-fit">
          {t("home.contactButton")}
        </a>
      </div>

      <div className="md:ml-60">
        <img
          src={img}
          alt={t("home.photoAlt")}
          className="w-48 h-48
            sm:w-64 sm:h-64
            md:w-96 md:h-96
            object-cover
            border-8 border-accent shadow-xl"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
          }}
        />
      </div>
    </div>
  );
}

export default Home;
