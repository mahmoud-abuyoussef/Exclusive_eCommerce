import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";

interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  name: string;
  emailOrPhone: string;
  password: string;
  address?: string;
  order?: [];
  reviews?: [];
  collections?: [];
}

export default function Signup() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const [formInputs, setFormInputs] = useState<User>({ id: uuidv4(), firstName: "", lastName: "", name: "", emailOrPhone: "", password: "", address: "", order: [], reviews: [], collections: [] });

  const [users, setUsers] = useState<User[]>(JSON.parse(localStorage.getItem("Users") || "[]"));

  function signup() {
    setUsers([...users, formInputs]);

    localStorage.setItem("Users", JSON.stringify([...users, formInputs]));

    setFormInputs({ ...formInputs, name: "", emailOrPhone: "", password: "" });

    toast.success("User Registerd Success");

    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
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
          <div className="ml-12">
            <h1 className="text-2xl xl:text-3xl font-extrabold">{t("Create an account")}</h1>
            <p className="mt-5">{t("Enter your details below")}</p>

            <div className="w-full flex-1 mt-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  signup();
                }}
                className="max-w-xs"
              >
                <input
                  value={formInputs.name}
                  onChange={(e) => setFormInputs({ ...formInputs, name: e.target.value })}
                  className="w-full py-4 font-medium outline-0 border-b border-gray-200 placeholder-gray-500 text-sm "
                  type="text"
                  required
                  placeholder={t("Name")}
                  minLength={1}
                />

                <input
                  value={formInputs.emailOrPhone}
                  onChange={(e) => setFormInputs({ ...formInputs, emailOrPhone: e.target.value })}
                  className="w-full py-4 font-medium outline-0 border-b border-gray-200 placeholder-gray-500 text-sm"
                  type="text"
                  required
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

                <button className="mt-5 tracking-wide bg-[#DB4444] text-gray-100 w-full py-4 rounded cursor-pointer">{t("Create Account")}</button>

                <div className="flex flex-col items-center mt-5">
                  <button className=" cursor-pointer w-full max-w-xs border border-[#00000066] rounded py-3 text-gray-800 flex items-center justify-center">
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                        <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
                      </svg>
                    </div>
                    <span className="ml-4">{t("Sign Up with Google")}</span>
                  </button>
                </div>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  {t("Already have account?")}{" "}
                  <Link to={"/login"} className="border-b border-gray-500">
                    {t("Login")}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
