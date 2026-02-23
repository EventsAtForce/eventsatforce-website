import React from 'react'
import './SeeYouSoon.css'
import CurvedLoop from '../Reactbits/CurvedLoop/CurvedLoop'

const SeeYouSoon = () => {
  return (
    <div className='see-you-soon-section sm:-mt-28'>
      <CurvedLoop
        marqueeText=" See ✦ You ✦ Soon ✦"
        speed={10}
        curveAmount={200}
        direction="left"
        className="custom-text-style"
        fontSize={72}
      />
    </div>
  )
}

export default SeeYouSoon
