import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { FaRegCircleXmark } from "react-icons/fa6";
import { LuUser, LuPackage2 } from "react-icons/lu";
import { FaRegStar, FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

interface NavLinks {
  name: string;
  path: string;
  show: boolean;
}

export default function Header({ local }: { local: string }) {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const user = localStorage.getItem("UserId");

  const [showMenu, setShowMenu] = useState(false);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navLinks: NavLinks[] = [
    { name: "Home", path: "/", show: true },
    { name: "Contact", path: "/contact", show: true },
    { name: "About", path: "/about", show: true },
    { name: "Sign Up", path: "/signup", show: user ? false : true },
  ];

  const showMenuStyle = showMenu ? "block" : "hidden";

  const direction = local === "ar" ? "left-0" : "right-0";

  function logout() {
    localStorage.removeItem("UserId");
    navigate("/login");
    toast.success(t("Logout Success"));
  }

  return (
    <header className="border-2 border-gray-200">
      <div className="container m-auto py-5 px-5  flex items-center justify-between">
        <Link to={"/"} className="font-bold text-2xl">
          {t("Exclusive")}
        </Link>

        <nav className="relative">
          <FaBars onClick={() => setShowMenu((state) => !state)} className="lg:hidden text-2xl cursor-pointer" />

          <ul className={`${direction} ${showMenuStyle} absolute w-[200px] lg:w-fit bg-black lg:bg-transparent text-white lg:text-black p-5 lg:static lg:flex lg:items-center lg:gap-5 rounded`}>
            {navLinks
              .filter((link) => link.show)
              .map((link) => (
                <li key={link.name} className="mb-5 lg:mb-0">
                  <NavLink to={link.path} className={({ isActive }) => (isActive ? "border-b-2 border-gray-400 font-bold" : "font-bold")}>
                    {t(link.name)}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>

        <div className="hidden lg:flex md:items-center md:gap-5">
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

          {user && (
            <div className="relative">
              <LuUser onClick={() => setShowProfileMenu((state) => !state)} className="text-2xl bg-[#DB4444] w-[32px] h-[32px] text-white p-2 rounded-full cursor-pointer" />
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
                      <button onClick={logout} className="flex items-center gap-2 cursor-pointer text-red-500 font-bold">
                        <CiLogout /> {t("Logout")}
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
