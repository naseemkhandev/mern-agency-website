const RevenueData = ({ client, desc, line }) => {
	return (
		<>
			<div className="text-center w-full">
				<h2 className="text-3xl lg:text-4xl font-semibold">{client}</h2>
				<p className="capitalize font-medium text-sm lg:text-base">{desc}</p>
			</div>
			{line && <span className="hidden sm:block w-[2px] h-20 rounded-full bg-black" />}
		</>
	);
};

const Revenue = () => {
	return (
		<section className="px-5 md:px-10 my-10 md:my-20">
			<div className="container mx-auto bg-[#e8effa] rounded-lg p-5 lg:p-6 flex gap-8 sm:gap-0 sm:items-center sm:justify-between flex-wrap sm:flex-nowrap">
				<RevenueData client="50+" desc="Registered companies" line={true} />
				<RevenueData client="100,00+" desc="happy clients" line={true} />
				<RevenueData client="500+" desc="well known developers" line={true} />
				<RevenueData client="24/7" desc="service" line={false} />
			</div>
		</section>
	);
};

export default Revenue;
