import React from 'react'
import './EventDetails.css'

const EventDetails = ({ event }) => {
  if (!event) {
    return (
      <div className='EventDetails'>
        <p>No event selected</p>
      </div>
    )
  }

  return (
    <div className='EventDetails'>
      <div className='event-details-content'>
        <h2 className='event-title'>{event.name}</h2>
        
        <div className='details-grid'>
          <div className='detail-item'>
            <span className='label'>Date</span>
            <span className='value'>{event.date}</span>
          </div>
          <div className='detail-item'>
            <span className='label'>Venue</span>
            <span className='value'>{event.venue}</span>
          </div>
          <div className='detail-item'>
            <span className='label'>Team Size</span>
            <span className='value'>{event.teamSize}</span>
          </div>
          <div className='detail-item'>
            <span className='label'>Registration Fee</span>
            <span className='value'>{event.registrationFee}</span>
          </div>
        </div>

        <div className='description-section'>
          <h3>About</h3>
          <p>{event.description}</p>
        </div>

        {event.eligibility && (
          <div className='eligibility-section'>
            <h3>Eligibility</h3>
            <p>{event.eligibility}</p>
          </div>
        )}

        {event.rules && event.rules.length > 0 && (
          <div className='rules-section'>
            <h3>Rules</h3>
            <ul>
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        )}

        {event.prizes && (
          <div className='prizes-section'>
            <h3>Prizes</h3>
            <div className='prizes-grid'>
              {event.prizes.first && (
                <div className='prize-item'>
                  <span className='rank'>🥇 First Prize</span>
                  <span className='amount'>{event.prizes.first}</span>
                </div>
              )}
              {event.prizes.second && (
                <div className='prize-item'>
                  <span className='rank'>🥈 Second Prize</span>
                  <span className='amount'>{event.prizes.second}</span>
                </div>
              )}
              {event.prizes.third && (
                <div className='prize-item'>
                  <span className='rank'>🥉 Third Prize</span>
                  <span className='amount'>{event.prizes.third}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {event.themes && event.themes.length > 0 && (
          <div className='themes-section'>
            <h3>Themes</h3>
            <div className='themes-list'>
              {event.themes.map((theme, index) => (
                <span key={index} className='theme-tag'>{theme}</span>
              ))}
            </div>
          </div>
        )}

        {event.whatIncluded && event.whatIncluded.length > 0 && (
          <div className='included-section'>
            <h3>What's Included</h3>
            <ul>
              {event.whatIncluded.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventDetails
