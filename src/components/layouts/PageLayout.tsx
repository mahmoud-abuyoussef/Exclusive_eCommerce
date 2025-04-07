import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";

export default function PageLayout() {
  const { i18n } = useTranslation();

  const [local, setLocal] = useState(localStorage.getItem("i18nextLng") || "en");

  function changeLanguage(language: string): void {
    switch (language) {
      case "ar":
        setLocal("ar");
        i18n.changeLanguage("ar");
        break;
      default:
        setLocal("en");
        i18n.changeLanguage("en");
        break;
    }
  }

  return (
    <div dir={local === "ar" ? "rtl" : "ltr"} className="bg-white">
      <TopHeader changeLanguage={changeLanguage} local={local} />

      <Header local={local} />

      <Outlet />

      <Footer />
    </div>
  );
}
