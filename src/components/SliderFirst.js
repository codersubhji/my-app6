import React from 'react'
import "./Slider.css"
import pic from "../images/p1-removebg-preview.png"
function SliderFirst() {
  return (
    <div>
 
 <div
  id="carouselExampleInterval"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">

  <div className="carousel-item active main" >
      <div className=" w-100" >
         <div><h1>Win Big with Fantasy Stock 1</h1></div>
         <div className='d-flex second-main'>
            <div className='list-slider'>
                <li>Analyze and buy player</li>
                <li>Analyze and buy player</li>
                <li>Analyze and buy player</li>
            </div>
            <div>
                <img src={pic} className="d-block w-100" alt="..." />
            </div>
         </div>
      </div>
    </div>

    <div className="carousel-item  main" data-bs-interval={10000}>
    <div className=" w-100" >
         <div><h1>Win Big with Fantasy Stock 2</h1></div>
         <div className='d-flex second-main'>
            <div className='list-slider'>
                <li>Analyze and buy player</li>
                <li>Analyze and buy player</li>
                <li>Analyze and buy player</li>
            </div>
            <div>
                <img src={pic} className="d-block w-100" alt="..." />
            </div>
         </div>
      </div>
    </div>
    
    <div className="carousel-item main">
    <div className=" w-100" >
         <div><h1>Win Big with Fantasy Stock 3</h1></div>
         <div className='d-flex second-main'>
            <div className='list-slider'>
                <li>Analyze and buy player</li>
                <li>Analyze and buy player</li>
                <li>Analyze and buy player</li>
            </div>
            <div>
                <img src={pic} className="d-block w-100" alt="..." />
            </div>
         </div>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )
}

export default SliderFirst