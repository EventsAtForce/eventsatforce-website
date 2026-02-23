import React from "react";
import "./Checkout.css";
import eventsData from '../EventDetails/Data.json'

const Checkout = ({ event, onSelectEvent }) => {
  const allEvents = eventsData.events || [];
  const otherEvents = allEvents.filter(e => e.id !== event?.id);

  return (
    <div className='checkout-wrapper'>
      <div className='checkout-container'>
        <h2 className='checkout-title' style={{ fontFamily: 'Guntech' }}>
          EXPLORE OTHER EVENTS
        </h2>

        <div className='events-grid'>
          {otherEvents.map((evt) => (
            <div
              key={evt.id}
              className='event-card'
              onClick={() => onSelectEvent?.(evt)}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${evt.coverImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className='event-card-content'>
                <h4 className='event-card-name'>{evt.name}</h4>
                <p className='event-card-date'>{evt.date}</p>
                <p className='event-card-fee'>{evt.registrationFee}</p>
              </div>
              <span className='event-card-cta'>View Details →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;