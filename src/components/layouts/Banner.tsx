import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Banner({ changeLanguage, local }: { changeLanguage: (language: string) => void; local: string }) {
  const { t } = useTranslation();
  return (
    <section className="bg-black">
      <div className="container m-auto  h-[48px] flex items-center justify-around">
        <p>
          <span className="text-white text-2xl text-[14px]">{t("Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!")}</span>
          <Link to={"/"} className="font-bold text-white ml-2.5">
            {t("Shop Now")}
          </Link>
        </p>

        <select value={local} onChange={(e) => changeLanguage(e.target.value)} className="text-white bg-black outline-0">
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </section>
  );
}
