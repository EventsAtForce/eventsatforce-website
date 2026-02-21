import React from "react";
import "./partners.css";

const classes = {
  section:"flex flex-col items-center justify-center xl:px-[100px] lg:px-[80px] sm:px-[60px] px-6 xl:py-[100px] lg:py-[80px] py-[60px]",
  title: "xl:text-4xl lg:text-3xl text-2xl font-HelveticaNeueBD mb-12 text-center",
  logoCard: "bg-[#1c1c1c] px-8 py-6 rounded-xl flex items-center justify-center min-w-[180px] hover:scale-105 transition duration-300",
  logo: "max-h-[50px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300",
};

const partners = [
  { id: 1, name: "Partner 1", logo: "https://via.placeholder.com/140x60?text=P1" },
  { id: 2, name: "Partner 2", logo: "https://via.placeholder.com/140x60?text=P2" },
  { id: 3, name: "Partner 3", logo: "https://via.placeholder.com/140x60?text=P3" },
  { id: 4, name: "Partner 4", logo: "https://via.placeholder.com/140x60?text=P4" },
  { id: 5, name: "Partner 5", logo: "https://via.placeholder.com/140x60?text=P5" },
];

const Partners = () => {
  return (
    <div>
    <section className={`Partner-div ${classes.section}`} sx={{mx:10}}>
      <h2 className={`partners-title`}>
        Our Partners
      </h2>

      <div className="partners-container">
        <div className="partners-track">
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className={classes.logoCard}>
              <img
                src={partner.logo}
                alt={partner.name}
                className={classes.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Partners;