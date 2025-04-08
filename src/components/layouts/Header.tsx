import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { LuUser } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuPackage2 } from "react-icons/lu";
import { Link, NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { FaRegCircleXmark } from "react-icons/fa6";

interface NavLinks {
  name: string;
  path: string;
}

export default function Header({ local }: { local: string }) {
  const { t } = useTranslation();

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navLinks: NavLinks[] = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <header className="border-2 border-gray-200">
      <div className="container m-auto py-5 px-5  flex items-center justify-between">
        <Link to={"/"} className="font-bold text-2xl">
          {t("Exclusive")}
        </Link>

        <nav className="relative">
          <FaBars className="md:hidden text-2xl cursor-pointer" />

          <ul
            className={`absolute ${
              local === "ar" ? "left-0" : "right-0"
            } w-[200px] md:w-fit bg-black md:bg-transparent text-white md:text-black p-5 md:static md:flex md:items-center md:gap-5`}
          >
            {navLinks.map((link) => (
              <li key={link.name} className="mb-5 md:mb-0">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-gray-400 font-bold" : "font-bold"
                  }
                >
                  {t(link.name)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex md:items-center md:gap-5">
          <div className="flex items-center gap-2 bg-[#f5f5f5] p-3 rounded-md">
            <input type="text" placeholder={t("What are you looking for?")} className="outline-0" />
            <IoSearch className="text-2xl" />
          </div>

          <div className="relative">
            <FaRegHeart />
          </div>

          <div className="relative">
            <GrCart />
          </div>

          <div className="relative">
            <LuUser
              onClick={() => setShowProfileMenu((state) => !state)}
              className="text-2xl bg-[#DB4444] w-[32px] h-[32px] text-white p-2 rounded-full cursor-pointer"
            />
            {showProfileMenu && (
              <div className="absolute right-0 w-[224px] bg-white text-black p-5 rounded-md shadow-lg">
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link to={"/account"} className="flex items-center gap-2">
                      <LuUser />
                      {t("Manage My Account")}
                    </Link>
                  </li>

                  <li>
                    <Link to={"/orders"} className="flex items-center gap-2">
                      <LuPackage2 /> {t("My Orders")}
                    </Link>
                  </li>

                  <li>
                    <Link to={"/collections"} className="flex items-center gap-2">
                      <FaRegCircleXmark /> {t("My Collections")}
                    </Link>
                  </li>

                  <li>
                    <Link to={"/reviews"} className="flex items-center gap-2">
                      <FaRegStar /> {t("My Reviews")}
                    </Link>
                  </li>

                  <li>
                    <button className="flex items-center gap-2 cursor-pointer text-red-500 font-bold">
                      <CiLogout /> {t("Logout")}
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
