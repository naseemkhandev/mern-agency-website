import Hero from "../components/Hero";
import Revenue from "../components/Revenue";
import Services from "../data/services.json";
import ServiceCard from "../components/common/ServiceCard";
import NewsLetter from "../components/NewsLetter";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";

const Home = () => {
	return (
		<>
			<Hero />
			<Revenue />
			<div className="bg-slate-400/5 py-10 md:py-16">
				<div className="container mx-auto px-5 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
					{Services.slice(0, 3).map((service) => (
						<ServiceCard key={service.id} {...service} />
					))}
				</div>
			</div>
			<Testimonials />
			<Team />
			<Faq />
			<NewsLetter />
		</>
	);
};

export default Home;
