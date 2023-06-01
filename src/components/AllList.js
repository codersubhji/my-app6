import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./All.css"
import Footer from './Footer'


function AllList() {
  return (
    <div className='main-div-box'>
        <h3 className='main-h3'>All Lists</h3>
        <div className='d-flex btn-double'>
            <button>Trending</button>
            <button>New Player</button>
        </div>


<div className='list-of-both'>
        <div className='list-both '>
           <div className='left-side'>
            <p>MS Dhoni</p>
                 <div className='last-para'>
                 <i class="fa-sharp fa-solid fa-people-group icon-1"></i>
                <span className='icon-at-one'>NZ</span>
                </div>
            </div>  
           <div className='right-side'>
            <p>38.89</p>
            <p className='last'>45.23%</p>
           </div>

        </div>
        <hr className='state-line'/>

 

 <div className='list-both '>
           <div className='left-side'>
            <p>Rishabh Pant</p>
                 <div className='last-para'>
                 <i class="fa-sharp fa-solid fa-people-group icon-1"></i>
                <span className='icon-at-one'>KKR</span>
                </div>
            </div>  
           <div className='right-side'>
            <p>77.54</p>
            <p className='last'>66.30%</p>
           </div>

        </div>
        <hr className='state-line'/>

<Footer/>

        <div className='list-both '>
           <div className='left-side'>
            <p>Virat Kohali</p>
                 <div className='last-para'>
                 <i class="fa-sharp fa-solid fa-people-group icon-1"></i>
                <span className='icon-at-one'>RRR</span>
                </div>
            </div>  
           <div className='right-side'>
            <p>88.45</p>
            <p className='last'>59.16%</p>
           </div>

        </div>
        <hr className='state-line'/>


        <div className='list-both '>
           <div className='left-side'>
            <p>Rohit Sharma</p>
                 <div className='last-para'>
                 <i class="fa-sharp fa-solid fa-people-group icon-1"></i>
                <span className='icon-at-one'>MMR</span>
                </div>
            </div>  
           <div className='right-side'>
            <p>23.40</p>
            <p className='last'>44.89%</p>
           </div>

        </div>
        <hr className='state-line'/>

        <div className='list-both '>
           <div className='left-side'>
            <p>Ms Dhoni</p>
                 <div className='last-para'>
                 <i class="fa-sharp fa-solid fa-people-group icon-1"></i>
                <span className='icon-at-one'>CSK</span>
                </div>
            </div>  
           <div className='right-side'>
            <p>55.38</p>
            <p className='last'>89.23%</p>
           </div>

        </div>
        <hr className='state-line'/>


        </div>

      
    </div>

    
  )
}

export default AllList