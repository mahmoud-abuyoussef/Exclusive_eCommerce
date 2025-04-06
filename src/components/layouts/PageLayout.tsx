import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";

export default function PageLayout() {
  const { i18n } = useTranslation();

  const [locale, setLocale] = useState(localStorage.getItem("i18nextLng") || "en");

  function changeLanguage(language: string) {
    if (language == "ar") {
      setLocale("ar");
      i18n.changeLanguage("ar");
    } else if (language == "en") {
      setLocale("en");
      i18n.changeLanguage("en");
    }
  }
  
  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"}>
      <Banner locale={locale} changeLanguage={changeLanguage} />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
