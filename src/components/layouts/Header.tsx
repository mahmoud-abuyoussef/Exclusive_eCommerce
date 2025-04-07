import { GrCart } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup" },
  ];

  return (
    <header>
      <div className="container m-auto flex items-center justify-between py-10">
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
            <FaRegHeart />
          </div>

          <div>
            <GrCart />
          </div>
        </div>
      </div>
    </header>
  );
}
