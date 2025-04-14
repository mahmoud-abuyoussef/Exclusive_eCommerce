import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";

interface FormInputs {
  emailOrPhone?: string;
  password?: string;
}

interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  emailOrPhone?: string;
  password?: string;
  address?: string;
  order?: [];
  reviews?: [];
  collections?: [];
}

export default function Login() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  function checkIsUserLoggedIn() {
    if (localStorage.getItem("UserId")) {
      navigate("/");
    }
  }

  setTimeout(() => {
    checkIsUserLoggedIn();
  }, 1000);

  const [formInputs, setFormInputs] = useState<FormInputs>({ emailOrPhone: "", password: "" });

  function login() {
    const users: User[] = JSON.parse(localStorage.getItem("Users") || "[]");

    const userExist = users.find((user: User) => {
      if (user.emailOrPhone === formInputs.emailOrPhone && user.password === formInputs.password) {
        localStorage.setItem("UserId", user.id);
        return user;
      }
    });

    if (userExist) {
      toast.success(t("Login Success"));
      navigate("/");
    } else {
      setFormInputs({ emailOrPhone: "", password: "" });
      toast.error(t("Email or Password is invalid"));
    }
  }

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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  login();
                }}
                className="mx-auto max-w-xs"
              >
                <input
                  value={formInputs.emailOrPhone}
                  onChange={(e) => setFormInputs({ ...formInputs, emailOrPhone: e.target.value })}
                  className="w-full py-4 font-medium outline-0 border-b border-gray-200 placeholder-gray-500 text-sm "
                  type="email"
                  required
                  minLength={1}
                  placeholder={t("Email or Phone Number")}
                />

                <input
                  value={formInputs.password}
                  onChange={(e) => setFormInputs({ ...formInputs, password: e.target.value })}
                  className="w-full py-4 font-medium outline-0 border-b border-gray-200 placeholder-gray-500"
                  type="password"
                  required
                  minLength={8}
                  placeholder={t("Password")}
                />

                <div className="flex items-center justify-between mt-5 gap-5">
                  <button className="tracking-wide bg-[#DB4444] text-gray-100 w-25 py-4 rounded cursor-pointer">{t("Login")}</button>

                  <Link to={"/forget-password"} className="text-[#DB4444]">
                    {t("Forget Password?")}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
