import React, { useEffect, useRef, useState } from "react";
import img from "../assets/f-removebg.png";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setLangOpen(false);
    setMobileOpen(false);
  };

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b">
      <nav className="relative mx-auto flex items-center justify-between px-4 md:px-[15%] py-2">
        {/* Logo + Nom */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={img}
            alt={t("nav.logoAlt")}
            className="w-12 h-12 md:w-20 md:h-20"
          />
          <div className="text-lg md:text-2xl font-bold whitespace-nowrap">
            Franz <span className="text-accent">Julien</span>
          </div>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-2">
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

          {/* Lang Desktop */}
          <li className="ml-2" ref={langRef}>
            <button
              className="btn btn-ghost btn-sm flex items-center gap-2"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={langOpen}
            >
              <span className="text-lg">
                {i18n.language === "en" ? "🇬🇧" : "🇫🇷"}
              </span>
              <span className="hidden lg:inline font-bold">
                {i18n.language === "en" ? "EN" : "FR"}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {langOpen && (
              <ul className="absolute right-4 md:right-[15%] mt-2 menu p-2 shadow bg-base-100 rounded-box w-44 border">
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
            )}
          </li>
        </ul>

        {/* Bouton Mobile */}
        <button
          className="md:hidden btn btn-ghost p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Mobile */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-base-100 border-b shadow-lg">
            <ul className="menu p-4 gap-1">
              <li className="font-bold">
                <a href="#" onClick={closeMobile}>
                  {t("nav.home")}
                </a>
              </li>
              <li className="font-bold">
                <a href="#about" onClick={closeMobile}>
                  {t("nav.about")}
                </a>
              </li>
              <li className="font-bold">
                <a href="#Skills" onClick={closeMobile}>
                  {t("nav.skills")}
                </a>
              </li>
              <li className="font-bold">
                <a href="#Projects" onClick={closeMobile}>
                  {t("nav.projects")}
                </a>
              </li>
              <li className="font-bold">
                <a href="#contact" onClick={closeMobile}>
                  {t("nav.contact")}
                </a>
              </li>

              <div className="divider my-2" />

              <li className="menu-title">
                <span>{t("nav.language") ?? "Langue"}</span>
              </li>

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
        )}
      </nav>
    </header>
  );
}

export default Navbar;
