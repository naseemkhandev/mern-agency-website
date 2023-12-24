import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
import { member1, member2, member3, member4, shape } from "../assets";

const Card = ({ imgSrc }) => {
	return (
		<div className="bg-white dark:bg-[#1a225c] p-5 lg:p-8 rounded-xl relative overflow-hidden">
			<img
				src={shape}
				width={500}
				height={500}
				alt="shape"
				className="w-full h-full absolute top-0 -right-20 opacity-30 dark:opacity-60"
			/>
			<div className="flex items-center gap-3 md:gap-5">
				<img
					src={imgSrc}
					alt="Testimonials member"
					className="w-20 aspect-square rounded object-cover object-top"
				/>
				<div className="capitalize">
					<h3 className="text-lg font-semibold">Naseem Khan</h3>
					<p className="text-xs md:text-sm font-[500] text-black/70 dark:text-white/90">
						CEO & Founder
					</p>
				</div>
			</div>
			<div className="mt-5">
				<p className="text-xs md:text-sm font-[500] text-black/70 dark:text-white">
					“I believe in lifelong learning and Learn. is a great place to learn
					from experts. I&apos;ve learned a lot and recommend it to all my
					friends and familys.”
				</p>
			</div>
			<div className="flex items-center gap-4 mt-4">
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

const Testimonials = () => {
	return (
		<div className="py-16 md:py-20 lg:py-28 my-10 md:my-16 relative bg-[#F5F8FF] dark:bg-[#131B4D]">
			<div className="container mx-auto px-5 md:px-10">
				<div className="text-center flex flex-col gap-3">
					<h3 className="font-medium text-indigo-600">Testimonials</h3>
					<h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
						What Our Client Say&apos;s
					</h2>
					<p className="max-w-2xl text-sm md:text-base mx-auto text-slate-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
						congue arcu, In et dignissim quam condimentum vel.
					</p>
				</div>

				<div className="grid md:grid-cols-2 mt-10 md:mt-16 gap-5">
					<Card imgSrc={member1} />
					<Card imgSrc={member2} />
					<Card imgSrc={member3} />
					<Card imgSrc={member4} />
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
