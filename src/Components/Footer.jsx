import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-base-100">
      <div className="border-t py-3 text-center text-sm">
        © {year} Franz <span className="text-accent font-semibold">Julien</span>. {t("footer.rights")}
      </div>
    </footer>
  );
}

export default Footer;