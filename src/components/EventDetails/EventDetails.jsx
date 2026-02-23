import React from 'react'
import './EventDetails.css'

const EventDetails = ({ event }) => {
  if (!event) {
    return (
      <div className='event-details'>
        <p>No event selected</p>
      </div>
    )
  }

  return (
    <div className='EventDetails'>
      {/* Cover Image */}
      {event.coverImage && (
        <div className='cover-image-container'>
          <img src={event.coverImage} alt={event.name} className='cover-image' />
          <button className='register-btn'>Register Now</button>
        </div>
      )}

      {/* Event Meta Info */}
      <div className='event-info-grid'>
        <div className='info-item'>
          <span className='info-label'>Date</span>
          <span className='info-value'>{event.date}</span>
        </div>
        <div className='info-item'>
          <span className='info-label'>Venue</span>
          <span className='info-value'>{event.venue}</span>
        </div>
        <div className='info-item'>
          <span className='info-label'>Team Size</span>
          <span className='info-value'>{event.teamSize}</span>
        </div>
        <div className='info-item'>
          <span className='info-label'>Fee</span>
          <span className='info-value'>{event.registrationFee}</span>
        </div>
      </div>

      {/* Description */}
      {event.description && (
        <div className='content-section'>
          <h3 className='section-title'>DESCRIPTION</h3>
          <p className='section-text'>{event.description}</p>
        </div>
      )}

      {/* Eligibility */}
      {event.eligibility && (
        <div className='content-section'>
          <h3 className='section-title'>ELIGIBILITY</h3>
          <p className='section-text'>{event.eligibility}</p>
        </div>
      )}

      {/* Rules */}
      {event.rules && event.rules.length > 0 && (
        <div className='content-section'>
          <h3 className='section-title'>RULES</h3>
          <ul className='rules-list'>
            {event.rules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Prizes */}
      {event.prizes && (
        <div className='content-section'>
          <h3 className='section-title'>PRIZES</h3>
          <div className='prizes-grid'>
            {event.prizes.first && (
              <div className='prize-item'>
                <span className='prize-label'>🥇 First Prize</span>
                <span className='prize-value'>{event.prizes.first}</span>
              </div>
            )}
            {event.prizes.second && (
              <div className='prize-item'>
                <span className='prize-label'>🥈 Second Prize</span>
                <span className='prize-value'>{event.prizes.second}</span>
              </div>
            )}
            {event.prizes.third && (
              <div className='prize-item'>
                <span className='prize-label'>🥉 Third Prize</span>
                <span className='prize-value'>{event.prizes.third}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Themes */}
      {event.themes && event.themes.length > 0 && (
        <div className='content-section'>
          <h3 className='section-title'>THEMES</h3>
          <div className='themes-list'>
            {event.themes.map((theme, idx) => (
              <span key={idx} className='theme-badge'>{theme}</span>
            ))}
          </div>
        </div>
      )}

      {/* What's Included */}
      {event.whatIncluded && event.whatIncluded.length > 0 && (
        <div className='content-section'>
          <h3 className='section-title'>WHAT'S INCLUDED</h3>
          <ul className='included-list'>
            {event.whatIncluded.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default EventDetails
