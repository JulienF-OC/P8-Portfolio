import React from "react";
import img from "../assets/f-removebg.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <div className="flex items-center justify-left md:justify-between px-[15%]">

      {/* Logo + Nom */}
      <div className="flex items-center">
        <img
          src={img}
          alt={t("nav.logoAlt")}
          className="w-20 h-20"
        />
        <div className="text-2xl font-bold">
          Franz <span className="text-accent">Julien</span>
        </div>
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex flex-row gap-2 items-center">
        <li className="btn btn-ghost font-bold">
          <a href="#">{t("nav.home")}</a>
        </li>
        <li className="btn btn-ghost font-bold">
          <a href="#about">{t("nav.about")}</a>
        </li>
        <li className="btn btn-ghost font-bold">
          <a href="#Skills">{t("nav.skills")}</a>
        </li>
        <li className="btn btn-ghost font-bold">
          <a href="#Projects">{t("nav.projects")}</a>
        </li>
        <li className="btn btn-ghost font-bold">
          <a href="#contact">{t("nav.contact")}</a>
        </li>

        {/* Dropdown Langue */}
        <li className="ml-4">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-sm flex items-center gap-2"
            >
              <span className="text-lg">
                {i18n.language === "en" ? "🇬🇧" : "🇫🇷"}
              </span>
              <span className="hidden lg:inline">
                {i18n.language === "en" ? "EN" : "FR"}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <button
                  className={i18n.language === "fr" ? "active" : ""}
                  onClick={() => changeLanguage("fr")}
                >
                  <span className="text-lg">🇫🇷</span> Français
                </button>
              </li>
              <li>
                <button
                  className={i18n.language === "en" ? "active" : ""}
                  onClick={() => changeLanguage("en")}
                >
                  <span className="text-lg">🇬🇧</span> English
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>

    </div>
  );
}

export default Navbar;
