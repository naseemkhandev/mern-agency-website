import { Link } from "react-router-dom";

import { hero, trophy } from "../assets";

const Hero = () => {
	return (
		<section className="w-full min-h-screen h-full flex items-center justify-center bg-[#e9edf4]">
			<div className="container px-5 md:px-10 py-10 mx-auto flex items-center flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-32">
				<div className="flex-[1] w-full flex flex-col gap-3 md:gap-5">
					<h3 className="text-indigo-500 font-medium text-lg">
						We are the World Best IT Company
					</h3>
					<h2 className="text-slate-950 font-medium text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-[1.1]">
						We Design Solutions for Business
					</h2>
					<p className="text-slate-600 text-sm md:text-base">
						Hi Naseem, Welcome to World Best IT Company. Lorem ipsum dolor sit
						amet consectetur, adipisicing elit. Nam, veritatis! Odit
						repellendus.
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
					<img src={hero} alt="hero" />
					<div className="absolute top-10 right-0 lg:-right-5 bg-white p-5 sm:px-6 sm:py-7 rounded-lg flex items-center flex-col gap-2">
						<img src={trophy} alt="trophy" className="w-9 sm:w-10 aspect-square" />
						<p className="font-medium text-center text-xs capitalize">
							award winning <br /> agency
						</p>
					</div>
					<div className="absolute bottom-10 left-0 lg:-left-5 bg-white py-3 px-5 md:px-8 md:py-5 rounded-lg flex items-center gap-2">
						<h2 className="text-5xl font-medium text-indigo-600">12</h2>
						<p className="font-medium text-xs md:text-sm capitalize">
							Years of <br /> Success
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
