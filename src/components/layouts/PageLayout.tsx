import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function PageLayout({ locale, changeLanguage }: { locale: string; changeLanguage: (language: string) => void }) {
  return (
    <>
      <Banner locale={locale} changeLanguage={changeLanguage} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
