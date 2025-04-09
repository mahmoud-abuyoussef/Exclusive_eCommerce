import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center ">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-[#cce5e9] text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/images/beatsnoop.png")',
            }}
          />
        </div>

        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex items-center justify-center">
          <div className="mt-12 flex flex-col">
            <h1 className="text-2xl xl:text-3xl font-extrabold">{t("Log in to Exclusive")}</h1>
            <p className="mt-5">{t("Enter your details below")}</p>

            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full py-4 font-medium outline-0 border-b border-gray-200 placeholder-gray-500 text-sm "
                  type="email"
                  placeholder={t("Email or Phone Number")}
                />

                <input
                  className="w-full py-4 font-medium outline-0 border-b border-gray-200 placeholder-gray-500"
                  type="password"
                  placeholder={t("Password")}
                />

                <div className="flex items-center justify-between mt-5 gap-5">
                  <button className="tracking-wide bg-[#DB4444] text-gray-100 w-25 py-4 rounded cursor-pointer">
                    {t("Login")}
                  </button>

                  <Link to={"/forget-password"} className="text-[#DB4444]">
                    {t("Forget Password?")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
