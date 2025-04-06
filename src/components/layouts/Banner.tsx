import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Banner({ locale, changeLanguage }: { locale: string; changeLanguage: (language: string) => void }) {
  const { t } = useTranslation();
  return (
    <section className="bg-black text-white">
      <div className="container m-auto flex justify-around items-center h-[48px]">
        <p>
          <span className="text-[#FAFAFA]">{t("Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!")} </span>
          <Link className="font-bold" to="/">
            {t("Shop Now")}
          </Link>
        </p>

        <select value={locale} onChange={(e) => changeLanguage(e.target.value)} name="langauge" id="langauge" className="bg-black outline-0">
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </section>
  );
}
