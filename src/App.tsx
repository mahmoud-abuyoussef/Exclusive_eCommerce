import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "./components/layouts/PageLayout";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
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
    <>
      <div dir={locale === "ar" ? "rtl" : "ltr"}>
        <BrowserRouter>
          <Routes>
            <Route element={<PageLayout locale={locale} changeLanguage={changeLanguage} />}>
              <Route path="/" element={<div>Home</div>} />
              <Route path="/about" element={<div>About</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
