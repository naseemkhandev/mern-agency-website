import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiBuildingStorefront } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";

import { navLinks } from "../../constants/NavLinks";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const { pathname } = useLocation();

	return (
		<div className="w-full border-b py-3">
			<div className="flex items-center justify-between container px-5 md:px-10 mx-auto">
				<Link
					to="/"
					className="flex items-center gap-1 sm:gap-2 font-medium sm:text-lg py-2 px-2 sm:px-3 md:px-2 lg:px-3 rounded-md bg-slate-900 text-white whitespace-nowrap"
				>
					<span className="text-lg sm:text-2xl">
						<HiBuildingStorefront />
					</span>
					<span>MERN App</span>
				</Link>
				<nav>
					<ul
						className={`flex px-5 md:px-0 md:items-center gap-5 md:gap-1 lg:gap-5 md:relative fixed top-0 w-full sm:w-80 h-screen md:shadow-none md:bg-transparent flex-col md:flex-row pt-28 md:pt-0 md:w-fit md:h-auto bg-white z-[100] md:z-auto transition-all duration-500 ${
							menu ? "left-0 shadow-xl" : "-left-full md:left-0"
						}`}
					>
						{navLinks.map((link) => (
							<li key={link.id}>
								<Link
									to={link.path}
									className={`capitalize hover:text-slate-900 font-medium text-[1.05rem] relative before:absolute before:bottom-0 md:px-1 lg:px-2 pb-4 md:pb-6 before:left-1/2 before:-translate-x-1/2 before:bg-slate-900 before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 before:w-full before:h-1 before:rounded-full border-b block w-full md:border-none md:inline md:w-fit ${
										link.path === pathname &&
										"text-slate-900 before:bg-slate-900 before:scale-100"
									}`}
								>
									{link.label}
								</Link>
							</li>
						))}
						<span
							onClick={() => setMenu(false)}
							className="absolute top-10 right-5 text-2xl hover:bg-black/10 bg-black/5 p-2 rounded-full cursor-pointer md:hidden"
						>
							<IoClose />
						</span>
					</ul>
				</nav>

				<div className="flex items-center gap-3">
					<Link
						to="/login"
						className="text-sm md:text-base font-medium md:font-normal py-2.5 px-5 bg-black/5 hover:bg-black/10 rounded-md"
					>
						Login
					</Link>
					<Link
						to="/register"
						className="text-sm md:text-base font-medium md:font-normal py-2.5 px-5 bg-slate-900 hover:bg-slate-800 text-white rounded-md"
					>
						Register
					</Link>
					<span
						onClick={() => setMenu(true)}
						className="text-2xl hover:bg-black/10 bg-black/5 p-2 rounded-full cursor-pointer md:hidden"
					>
						<BiMenuAltRight />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
