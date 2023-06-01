import React from 'react'
import "./Card.css"
function Card() {
  return (
    <div className='main-div'>
       <h3>Rishabh Pant</h3>
       <div className='d-flex'>
       <i class="fa-solid fa-hands-clapping icon"></i>
       <div className='line'></div>
       <p className='team'>KKR</p>
       </div>
       <p className='num'>43.04 <span className='span-1'>(+72.64%)</span></p>
    </div>
  )
}

export default Card