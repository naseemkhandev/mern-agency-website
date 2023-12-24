import { Link } from "react-router-dom";

import { about, coding, hero, lock, trophy } from "../assets";

const AboutUs = () => {
	return (
		<section className="w-full min-h-screen h-full flex items-center justify-center bg-[#e9edf4]">
			<div className="container px-5 md:px-10 py-10 md:py-24 mx-auto flex items-center flex-col-reverse lg:flex-row-reverse gap-20">
				<div className="flex-[1] w-full flex flex-col gap-3 md:gap-5">
					<h3 className="text-indigo-500 font-medium text-lg">
						We are the World Best IT Company
					</h3>
					<h2 className="text-slate-950 font-medium text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-[1.1]">
						We Work to Ensure Your Success
					</h2>
					<p className="text-slate-600 text-sm md:text-base">
						Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<p className="text-xs">
						Ut enim ad minim veniam, quis nostrud exercitation ullamco labor is
						tetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
						et dolore magna aliqua.
					</p>
					<div className="flex gap-2">
						<Link
							to="/contact"
							className="px-5 py-3 border border-slate-950 rounded-lg bg-slate-950 text-white hover:bg-slate-800 text-sm md:text-base"
						>
							Connect now
						</Link>
						<Link
							className="px-5 py-3 border border-slate-950 rounded-lg hover:bg-slate-950 hover:text-white text-sm md:text-base"
							to="/about"
						>
							Learn more
						</Link>
					</div>
				</div>
				<div className="flex-[1] w-full relative">
					<img src={about} alt="about" className="sm:w-[80%] mx-auto" />
					<div className="absolute top-32 sm:top-10 -right-3 lg:-right-5 bg-white p-3 sm:px-6 sm:py-7 rounded-lg flex items-center flex-col gap-2">
						<img
							src={coding}
							alt="coding"
							className="w-6 sm:w-10 aspect-square"
						/>
						<p className="font-medium text-center text-[.65rem] sm:text-xs capitalize">
							award winning <br /> agency
						</p>
					</div>
					<div className="absolute -top-5 left-5 w-fit bg-white p-5 sm:px-6 sm:py-7 rounded-lg flex items-center flex-col gap-2">
						<img src={lock} alt="lock" className="w-9 sm:w-10 aspect-square" />
					</div>
					<div className="absolute -bottom-10 sm:bottom-10 left-0 lg:-left-5 bg-indigo-600 py-8 px-11 md:py-7 md:px-11 rounded-full flex items-center flex-col">
						<h2 className="text-4xl sm:text-5xl font-medium text-white">23</h2>
						<p className="font-medium text-xs md:text-sm capitalize text-white">
							Years of <br /> Success
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
