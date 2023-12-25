import { useState } from "react";
import { Link } from "react-router-dom";

import { registerBg } from "../assets";

const Register = () => {
	const [user, setUser] = useState({
		username: "",
		email: "",
		phone: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section
			style={{
				background: `url(${registerBg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="flex bg-black/50 py-20 h-full flex-col items-center your justify-center your px-6 mx-auto">
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Create an account
						</h1>
						<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="username"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Username
								</label>
								<input
									type="username"
									name="username"
									id="username"
									value={user.username}
									onChange={handleChange}
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Enter your username"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									value={user.email}
									onChange={handleChange}
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Enter your email"
								/>
							</div>
							<div>
								<label
									htmlFor="phone"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Phone
								</label>
								<input
									type="number"
									name="phone"
									id="phone"
									value={user.phone}
									onChange={handleChange}
									placeholder="Enter your phone number"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									value={user.password}
									onChange={handleChange}
									placeholder="Enter your password"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>
							<div className="flex items-start"></div>
							<button
								type="submit"
								className="w-full text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-900 font-medium rounded-lg text-sm px-5 py-3.5 text-center your dark:bg-slate-900 dark:hover:bg-slate-800 dark:focus:ring-slate-900"
							>
								Create an account
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Already have an account?{" "}
								<Link
									to="/login"
									className="font-medium text-slate-900 hover:underline dark:text-slate-900"
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
