import { Link } from "react-router";
import { VscSend } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div>
            <span className="font-bold text-2xl block">{t("Exclusive")}</span>

            <span className="mt-2 text-[20px] block">{t("Subscribe")}</span>

            <span className="mt-2 text-[20px] block">{t("Get 10% off your first order")}</span>

            <div className="rounded border-2 border-white max-w-[250px] mt-5 flex items-center">
              <input
                type="email"
                className="p-3 outline-0 w-[210px]"
                placeholder={t("Enter your email")}
              />
              <VscSend className="ml-2" />
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
              <li>exclusive@gmail.com</li>
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

            <p className="text-[#FAFAFA] text-[12px] mt-5">{t("Save $3 with App New User Only")}</p>

            <div className="flex gap-2 mt-4">
              <img src="/images/QrCode.png" alt="Google Play" className="h-20 w-20" />
              <div>
                <a href="#">
                  <img
                    src="/images/google-playpng.png"
                    alt="Google Play"
                    className="h-10 w-[120px] mb-2"
                  />
                </a>

                <a href="#">
                  <img src="/images/appstore.png" alt="App Store" className="h-10 w-[120px]" />
                </a>
              </div>
            </div>

            <div>
              <ul className="flex items-center gap-7 mt-5">
                <li>
                  <a href="#">
                    <FaFacebookF className="text-2xl" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter className="text-2xl" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram className="text-2xl" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedinIn className="text-2xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6 border-t p-5">
        © {t("Copyright Rimel 2022. All right reserved")}.
      </div>
    </footer>
  );
}
