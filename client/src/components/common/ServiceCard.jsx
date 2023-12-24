import { registerBg } from "../../assets";

const ServiceCard = ({ img, title, desc }) => {
	return (
		<div className="w-full h-full">
			<div className="rounded-[20px] h-full p-3 md:p-5 shadow-2 hover:shadow-lg bg-white dark:bg-dark-2">
				<img
					src={registerBg}
					alt="service"
					className="w-full h-64 rounded-lg"
				/>
				<div className="pt-5">
					<h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
						{title}
					</h4>
					<p className="text-body-color dark:text-dark-6">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
