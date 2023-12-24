import { registerBg } from "../assets";
import services from "../data/services.json";

const Card = ({ img, title, desc }) => {
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

const Services = () => {
	return (
		<section className="dark:bg-dark py-10 md:py-16">
			<div className="flex flex-wrap">
				<div className="w-full container mx-auto px-5 md:px-10">
					<div className="mx-auto mb-12 lg:mb-16 text-center">
						<span className="text-slate-900 mb-2 block text-lg font-semibold">
							Our Services
						</span>
						<h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-semibold sm:text-4xl md:text-[40px]">
							What We Offer
						</h2>
						<p className="text-body-color max-w-xl mx-auto text-base dark:text-dark-6">
							There are many variations of passages of Lorem Ipsum available but
							the majority have suffered alteration in some form.
						</p>
					</div>
				</div>
			</div>
			<div className="bg-slate-400/5 py-10 md:py-16">
				<div className="container mx-auto px-5 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
					{services.map((service) => (
						<Card key={service.id} {...service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
