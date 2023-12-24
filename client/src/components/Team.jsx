import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

import { member1, member2, member3, member4 } from "../assets";

const Card = ({ imgSrc }) => {
	return (
		<div className="bg-[#F5F8FF] dark:bg-[#131B4D] p-3 rounded-xl text-center flex flex-col items-center">
			<img
				src={`${imgSrc}`}
				alt="team member"
				className="w-full h-80 sm:h-64 rounded-xl object-cover object-top"
			/>
			<h2 className="mt-4 text-lg font-semibold">Naseem Khan</h2>
			<p className="text-sm text-black/70 dark:text-white/70">
				FullStack Developer
			</p>
			<div className="flex items-center gap-4 my-4">
				<Link
					to="https://www.linkedin.com/in/naseemkhann"
					target="_blank"
					className="text-lg"
				>
					<FaLinkedin />
				</Link>
				<Link
					to="https://github.com/NaseemKhan005"
					target="_blank"
					className="text-lg"
				>
					<FaGithub />
				</Link>
				<Link
					to="https://www.upwork.com/freelancers/~01a320b86f9044dd91?viewMode=1"
					target="_blank"
					className="text-lg"
				>
					<SiUpwork />
				</Link>
				<Link
					to="https://naseemkhan.vercel.app/"
					target="_blank"
					className="text-lg"
				>
					<BiWorld />
				</Link>
			</div>
		</div>
	);
};

const Team = () => {
	return (
		<div className="py-16 relative">
			<div className="container mx-auto px-5 md:px-10">
				<div className="text-center flex flex-col gap-3">
					<h3 className="font-medium text-indigo-600 capitalize">our team</h3>
					<h2 className="font-semibold capitalize text-2xl sm:text-3xl md:text-4xl">
						meet our team{" "}
					</h2>
					<p className="max-w-2xl text-sm md:text-base mx-auto text-slate-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
						congue arcu, In et dignissim quam condimentum vel.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5">
					<Card imgSrc={member1} />
					<Card imgSrc={member2} />
					<Card imgSrc={member3} />
					<Card imgSrc={member4} />
				</div>
			</div>
		</div>
	);
};

export default Team;
