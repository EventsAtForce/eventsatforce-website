import React, { useState, useEffect } from 'react'
import EventDetails from './EventDetails/EventDetails'
import Checkout from './Checkout/Checkout'

const EventsAthenova = ({ pauseScroll, resumeScroll }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const events = [
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 3, name: 'Event 3' },
    { id: 4, name: 'Event 4' }
  ];

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

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start py-12 px-4 '>
      <div className='w-full flex items-center justify-center text-5xl font-bold mb-8' style={{ fontFamily: 'Guntech' }}>
        Events
      </div>

      <div className='w-full max-w-[1440px] grid md:grid-cols-2 grid-cols-1 gap-4 auto-rows-max'>
        {events.map((event) => (
          <div
            key={event.id}
            className='border-2 border-gray-400 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[400px] bg-black hover:bg-gray-900 transition-colors duration-300'
          >

            <div className='flex gap-4 mt-auto w-full justify-end'>
              <button
                onClick={() => handleDetailsClick(event)}
                className='px-6 py-2 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300'
              >
                Details
              </button>
              <button
                className='px-6 py-2 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300'
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-hidden'>
          <div className='bg-gray-950 rounded-2xl max-w-4xl w-full max-h-[90vh] border-2 border-gray-400 flex flex-col overflow-hidden'>
            {/* Close button */}
            <div className='flex justify-end p-4 flex-shrink-0'>
              <button
                onClick={handleCloseModal}
                className='text-white text-2xl font-bold hover:text-gray-400 transition-colors'
                aria-label='Close modal'
              >
                ×
              </button>
            </div>

            {/* Modal content - scrollable */}
            <div data-lenis-prevent className='overflow-y-auto flex-1 min-h-0'>
              <div className='p-6 space-y-6'>
                {/* EventDetails section */}
                <div>
                    <EventDetails event={selectedEvent} />
                </div>

                {/* Checkout section */}
                <div>
                    <Checkout event={selectedEvent} onClose={handleCloseModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventsAthenova
