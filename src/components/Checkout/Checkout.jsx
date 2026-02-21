import React from "react";
import "./Checkout.css";

const classes = {
  section:
    "checkout-section flex flex-col items-center justify-center xl:px-[20px] lg:px-[80px] sm:px-[60px] px-6 xl:py-[100px] lg:py-[80px] py-[60px]",
  card:
    "event-card w-[220px] h-[220px] flex items-center justify-center  overflow-hidden cursor-pointer",
  image:
    "w-full h-full object-cover",
};

const events = [
  { id: 1, name: "Event 1", image: "https://via.placeholder.com/300x400?text=Event+1" },
  { id: 2, name: "Event 2", image: "https://via.placeholder.com/300x400?text=Event+2" },
  { id: 3, name: "Event 3", image: "https://via.placeholder.com/300x400?text=Event+3" },
];

const Checkout = () => {
  return (
    <section className={classes.section}>
      <div className="checkout-container">
        <h2 class="title">Checkout Our Other Events</h2>

        <div className="hii">
          {events.map((event) => (
            <div key={event.id} className={classes.card}>
              <img
                src={event.image}
                alt={event.name}
                className={classes.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Checkout;