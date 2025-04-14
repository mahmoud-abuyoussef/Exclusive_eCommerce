import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t } = useTranslation();
  const sidebarLink = [
    { name: t("Woman’s Fashion"), path: "/" },
    { name: t("Woman’s Fashion"), path: "/" },
    { name: t("Woman’s Fashion"), path: "/" },
    { name: t("Woman’s Fashion"), path: "/" },
    { name: t("Woman’s Fashion"), path: "/" },
    { name: t("Woman’s Fashion"), path: "/" },
    { name: t("Woman’s Fashion"), path: "/" },
  ];

  return (
    <>
      <div className="border-r-1 border-gray-200 md:min-w-[200px]">
        <ul>
          {sidebarLink.map((link, index) => (
            <li key={index} className="my-5">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
