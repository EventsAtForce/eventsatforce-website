import React from "react";
import "./partners.css";

const partners = [
  { id: 1, name: "Partner 1", logo: "https://via.placeholder.com/140x60?text=Partner+1" },
  { id: 2, name: "Partner 2", logo: "https://via.placeholder.com/140x60?text=Partner+2" },
  { id: 3, name: "Partner 3", logo: "https://via.placeholder.com/140x60?text=Partner+3" },
  { id: 4, name: "Partner 4", logo: "https://via.placeholder.com/140x60?text=Partner+4" },
  { id: 5, name: "Partner 5", logo: "https://via.placeholder.com/140x60?text=Partner+5" },
];

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="partners-wrapper">
        <h2 className="partners-title" style={{ fontFamily: "Guntech" }}>
          OUR PARTNERS
        </h2>
        <div className="partners-container">
          <div className="partners-track">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={index} className="logo-card">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;