import { Link } from "react-router";
import { VscSend } from "react-icons/vsc";
import { FiTwitter } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div>
            <span className=" text-2xl font-bold">{t("Exclusive")}</span>
            <p className="mt-4 text-sm">{t("Subscribe")}</p>
            <p className="mt-4 text-sm ">{t("Get 10% off your first order")}</p>
            <div className="border border-white flex items-center gap-3 rounded mt-4 max-w-fit">
              <input
                type="email"
                placeholder={t("Enter your email")}
                className="outline-0 bg-transparent p-2 min-w-200px "
              />
              <VscSend className="mr-1.5" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">{t("Support")}</h3>
            <ul className="text-sm space-y-2">
              <li>
                <address className="not-italic">
                  {t("111 Bijoy sarani, Dhaka, DH 1515, Bangladesh")}.
                </address>
              </li>
              <li>
                <span>exclusive@gmail.com</span>
              </li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">{t("Account")}</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link to={"/account"}>{t("My Account")}</Link>
              </li>
              <li>
                <Link to={"/login"}>{t("Login")}</Link> /{" "}
                <Link to={"/signup"}>{t("Register")}</Link>
              </li>
              <li>
                <Link to={"/cart"}>{t("Cart")}</Link>
              </li>
              <li>
                <Link to={"/wishlist"}>{t("Wishlist")}</Link>
              </li>
              <li>
                <Link to={"/shop"}>{t("Shop")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">{t("Quick Link")}</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link to={"/privacy"}>{t("Privacy Policy")}</Link>
              </li>
              <li>
                <Link to={"/terms"}>{t("Terms Of Use")}</Link>
              </li>
              <li>
                <Link to={"/faq"}>{t("FAQ")}</Link>
              </li>
              <li>
                <Link to={"/contact"}>{t("Contact")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">{t("Download App")}</h3>
            <p className="text-sm text-gray-500">{t("Save $3 with App New User Only")}</p>

            <div className="mt-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v52tLnvL3FEjfxjPvZWbvUMYvVUtAm9R6A&s"
                alt="Google Play"
                className="h-10 w-[150px] mb-4 border border-white rounded"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgk5tpxJC_1CAnsXwo2VvBGyQGI-o5c1PJw&s"
                alt="App Store"
                className="h-10 w-[150px] mb-4 border border-white rounded"
              />
            </div>

            <div className="mt-4 flex items-center gap-7">
              <a href="#">
                <BiLogoFacebook className="text-white text-2xl" />
              </a>
              <a href="#">
                <FiTwitter className="text-white text-2xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-white text-2xl" />
              </a>
              <a href="#">
                <FaLinkedinIn className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-5 text-gray-500 mt-6 border-t pt-4">
        © {t("Copyright Rimel 2022. All right reserved")}
      </div>
    </footer>
  );
}
