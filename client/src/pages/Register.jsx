import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { registerBg } from "../assets";
import { useRegisterMutation } from "../store/api/authApiSlice";
import { setUser } from "../store/slices/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loading = toast.loading("Loading...");

    try {
      const res = await register(formData).unwrap();
      dispatch(setUser(res.user));
      toast.success("You have successfully logged in");
      setFormData({
        username: "",
        email: "",
        phone: "",
        password: "",
      });
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
        background: `url(${registerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex bg-black/50 py-20 h-screen flex-col items-center your justify-center your px-6 mx-auto">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-lg xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
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
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5"
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
              <div className="flex items-start"></div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-900 font-medium rounded-lg text-sm px-5 py-3.5 text-center"
              >
                {isLoading ? "Loading..." : "Create an account"}
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="font-medium text-slate-900 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
