import React from 'react'
import './EventDetails.css'

const EventDetails = () => {
  return (
    <div class="event-card">
        <div class="cover-img">
        
        </div>
  
        <div class="details-row">
            <span>name</span>
            <span>date</span>
            <span>venue</span>
        </div>

        <div class = "venue">
            <span>Robosoccer</span>
            <span>March 13</span>
            <span>Amphitheatre</span>
        </div>

        <div class="content-section">
        <p class="label">description</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illo quasi tempore laborum, porro autem maiores similique quia cupiditate! Perferendis quisquam obcaecati rerum necessitatibus voluptas ipsam corporis quas, excepturi facilis.</p>
        </div>

        <div class="content-section">
        <p class="label">rules</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto incidunt error deleniti cumque vel nemo voluptatum distinctio eos veritatis quisquam ratione amet corrupti sequi nulla, tempora facere ipsam doloremque.</p>
        </div>
    </div>
  )
}

export default EventDetails
