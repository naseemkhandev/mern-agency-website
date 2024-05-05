/* eslint-disable react-hooks/exhaustive-deps */
import Hero from "../components/Hero";
import Revenue from "../components/Revenue";
import Services from "../data/services.json";
import ServiceCard from "../components/common/ServiceCard";
import NewsLetter from "../components/NewsLetter";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/users/verify`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          dispatch(setUser(data.user));
        }
      } catch (error) {
        console.log(error);
      }
    };

    authenticateUser();
  }, []);

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
