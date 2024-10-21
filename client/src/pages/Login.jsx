import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginBg } from "../assets";
import { useLoginMutation } from "../store/api/authApiSlice";
import { setUser } from "../store/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((preValue) => ({ ...preValue, [name]: value }));
  };

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loading = toast.loading("Loading...");

    try {
      const res = await login(formData).unwrap();
      toast.success("You have successfully logged in");
      dispatch(setUser(res.user));
      navigate("/");
    } catch (error) {
      toast.error(error.data.message || "An error occurred");
    } finally {
      toast.dismiss(loading);
    }
  };

  return (
    <section
      style={{
        background: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex bg-black/50 py-20 h-screen flex-col items-center your justify-center your px-6 mx-auto">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 md:w-[25rem] xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-slate-900"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="/auth/login"
                  className="text-sm font-medium text-slate-900 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-900 font-medium rounded-lg text-sm px-5 py-3.5 text-center"
              >
                {isLoading ? "Loading..." : "Sign in"}
              </button>
              <p className="text-sm font-light text-gray-500">
                Don&apos;t have an account yet?{" "}
                <Link
                  to="/auth/register"
                  className="font-medium text-slate-900 hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
