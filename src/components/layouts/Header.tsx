import { useState } from "react";
import { LuUser } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { BsXCircle } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { LuPackage2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup" },
  ];

  const [showProfile, setShowProfle] = useState(false);

  return (
    <header>
      <div className="container px-5 m-auto flex items-center justify-between py-10">
        <Link to={"/"} className="font-bold text-2xl tracking-[3%]">
          Exclusive
        </Link>

        <nav>
          <ul className="flex gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink to={link.path} className="text-black ">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="search p-1 rounded bg-[#f5f5f5] flex items-center gap-2">
            <input
              type="text"
              placeholder="What are you looking for"
              className="outline-0 border-0 py-[7px] pr-[12px] pl-[20px]"
            />
            <IoSearch />
          </div>

          <div>
            <FaRegHeart className="cursor-pointer" />
          </div>

          <div>
            <GrCart className="cursor-pointer" />
          </div>

          <div className="relative">
            <LuUser
              onClick={() => setShowProfle((state) => !state)}
              className="bg-[#db4444] w-[32px] h-[32px] text-white p-1 text-2xl rounded-full cursor-pointer"
            />
            {showProfile && (
              <div className="w-[224px] h-[208px] rounded absolute right-0 top-[40px] bg-[#0000000a] backdrop-blur-2xl p-2">
                <ul className="gap-[13px]">
                  <li className="mb-3 mt-3">
                    <Link to={"/"} className="flex items-center gap-3 text-white">
                      <LuUser />
                      <span>Manage My Account</span>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link to={"/"} className="flex items-center gap-3 text-white">
                      <LuPackage2 />
                      <span>My Order</span>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link to={"/"} className="flex items-center gap-3 text-white">
                      <BsXCircle />
                      <span>My Collections</span>
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link to={"/"} className="flex items-center gap-3 text-white">
                      <FaRegStar />
                      <span>My Reviews</span>
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 mb-3 text-white cursor-pointer">
                    <CiLogout />
                    <button className="cursor-pointer">Logout</button>
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
