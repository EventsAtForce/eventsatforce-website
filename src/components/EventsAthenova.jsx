import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import EventDetails from './EventDetails/EventDetails'
import Checkout from './Checkout/Checkout'
import eventsData from './EventDetails/Data.json'

const EventsAthenova = ({ pauseScroll, resumeScroll }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const modalScrollRef = useRef(null)

  const events = eventsData.events;

  // Pause Lenis RAF entirely when modal is open so it can't intercept scroll events
  useEffect(() => {
    if (isModalOpen) {
      pauseScroll?.()
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      resumeScroll?.()
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      resumeScroll?.()
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isModalOpen, pauseScroll, resumeScroll])

  const handleDetailsClick = (event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  const handleSelectEvent = (event) => {
    setSelectedEvent(event)
    // Scroll modal back to top so the new event's details show from the start
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTop = 0
    }
  }

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-[1440px]'>
        {/* Header */}
        <div className='mb-12 w-full flex items-center justify-center '>
          <h1 className='text-5xl sm:text-6xl font-bold text-black ' style={{ fontFamily: 'Guntech' }}>
            EVENTS
          </h1>
        </div>

        {/* Events Grid */}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 px-6'>
          {events.map((event) => (
            <div
              key={event.id}
              className='group border-2 border-gray-400 rounded-2xl overflow-hidden flex flex-col bg-black hover:border-white hover:bg-gray-950 transition-all duration-300 min-h-[450px] hover:shadow-lg'
            >
              {/* Cover Image */}
              {event.coverImage && (
                <div className='w-full h-48 md:h-56 overflow-hidden'>
                  <img
                    src={event.coverImage}
                    alt={event.name}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
              )}

              {/* Event Content */}
              <div className='p-6 md:p-8 flex flex-col flex-1'>
                {/* Event Name */}
                <h3 className='text-2xl md:text-3xl font-bold text-white mb-6 group-hover:translate-x-1 transition-transform duration-300' style={{ fontFamily: 'Guntech' }}>
                  {event.name}
                </h3>

                {/* Event Info */}
                <div className='flex-1 space-y-4 mb-8 text-gray-300'>
                  <div className='space-y-1'>
                    <p className='text-xs font-semibold text-gray-400 uppercase tracking-widest'>Date</p>
                    <p className='text-base font-medium text-white'>{event.date}</p>
                  </div>
                  <div className='space-y-1'>
                    <p className='text-xs font-semibold text-gray-400 uppercase tracking-widest'>Registration Fee</p>
                    <p className='text-base font-medium text-white'>{event.registrationFee}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className='flex gap-3 w-full mt-auto'>
                  <button
                    onClick={() => handleDetailsClick(event)}
                    className='flex-1 px-4 py-3 border-2 border-white text-white rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 hover:scale-105'
                  >
                    Details
                  </button>
                  <button
                    className='flex-1 px-4 py-3 border-2 border-white text-white bg-white/10 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 hover:scale-105'
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Rendered via Portal */}
      {isModalOpen && ReactDOM.createPortal(
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='bg-black/60 backdrop-blur-md p-4 overflow-hidden'>
          <div className='bg-black rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl'>
            {/* Modal Header */}
            <div className='flex justify-between items-center p-6 md:p-8 flex-shrink-0'>
              <h2 className='text-2xl md:text-3xl font-bold text-white' style={{ fontFamily: 'Guntech' }}>
                {selectedEvent?.name}
              </h2>
              <button
                onClick={handleCloseModal}
                className='text-white text-3xl font-light hover:text-gray-400 transition-colors duration-200'
                aria-label='Close modal'
              >
                ×
              </button>
            </div>

            {/* Modal Content - Smooth Scrolling */}
            <div data-lenis-prevent ref={modalScrollRef} className='flex-1 overflow-y-auto'>
              <div className='p-6 md:p-8 space-y-8'>
                {/* EventDetails section */}
                <div>
                  <EventDetails event={selectedEvent} />
                </div>

                {/* Divider */}
                <div className='h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent'></div>

                {/* Checkout section */}
                <div>
                  <Checkout event={selectedEvent} onSelectEvent={handleSelectEvent} />
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default EventsAthenova
