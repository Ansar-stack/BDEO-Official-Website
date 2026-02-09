import { useEffect, useState } from "react";
import heroImage from "../../assets/Front Image.png";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: 850, label: "BENEFICIARIES REACHED", suffix: "+" },
  { value: 3, label: "PROJECT MONTHS", suffix: "+" },
  { value: 2023, label: "YEAR ESTABLISHED", suffix: "" },
  { value: 6584, label: "GRANT FUNDING", suffix: " USD" }
];

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full">
      {/* HERO IMAGE SECTION */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0  h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div
          data-aos="zoom-out"
          data-aos-duration="800"
          className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-7xl px-6 md:px-12 text-white">
            <h1 className="text-3xl  lg:text-[4vw] font-bold leading-tight tracking-tight hero-title">
              Building a Prosperous & <br />
              Self-Reliant Southern <br />
              Afghanistan Together
            </h1>
            <p className="mt-1 max-w-lg text-base md:text-lg text-gray-200">
              Empowering vulnerable communities through education, sustainable development, and economic resilience since 2023.
            </p>
            <Button onClick={() => navigate('/about-us')} text={'Discover More'} classes={'primary-btn mt-3'} />
          </div>
        </div>
      </div>
      {/* STATS SECTION */}
      <div className="w-full mb-5">
        <div className="w-full bg-blue-600 px-4 py-6 flex flex-wrap justify-around items-center text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex-1 min-w-[100px] mb-2 md:mb-0">
              <h2 className="text-md md:text-2xl font-bold">
                <Counter end={stat.value} suffix={stat.suffix || ""} />
                {stat.value === 1200 && "M"}
              </h2>
              <p className="text-[10px] md:text-sm tracking-tight md:tracking-wider opacity-90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
