import React from 'react'
import angle from '../images/angle 3.png'
import angle1 from '../images/angle 4.png'
import angle2 from '../images/angle 5.png'
import angle3 from '../images/angle 6.png'
import group68 from '../images/Group 68.png';
import group69 from '../images/Group 69.png';
import group72 from  '../images/group 72.png'
import group26 from '../images/group 26.png'
import group32 from '../images/group 32.png'
import rectangle from '../images/rectangle 3.png'
import group77 from '../images/group 77.png'
const Trending = () => {
  return (
   <>
    <div>
        <div className='trending'>
        <div className="line"></div>
           <h4>Trending T-Shirts</h4>
           <div className="line-1"></div>
           
        </div>
    </div>
    <div className='trend-section'>
    <div>
  
  <img src={group77} alt="" />
  <p>Men Henley Neck Full Sleeve Red Wine</p>
  <div className='trending-images'>
  
   <img src={group26} alt="" />
   <div className='size'>
   <img src={group32} alt="" />
   </div>
   </div>
  </div>
   {/* <div>
    <img src={angle} alt="" />
    <p>Men Hency Neck Full Sleeve Red Wine</p>
    <div className='trending-images'>
    <img src={group26} alt="" />
    <div className='size'>
    <img src={group32} alt="" />
    </div>
    </div>
    </div>
     
    <div className='trending-cart-images'>
    <img src={group68} alt="" />
    <img src={group69} alt="" />
    <img src={group72} alt="" />
    </div> */}
    <div>
    <img src={angle1} alt="" />
    <p>Men Henley Neck Full Sleeve Red Wine </p>
    <div className='trending-images'>
    <img src={group26} alt="" />
    <div className='size'>
    <img src={group32} alt="" />
    </div>
    </div>
    </div>
    <div>
    <img src={angle2} alt="" />
    <p>Men Henley Neck Full Sleeve Red Wine</p>
    <div className='trending-images'>
    <img src={group26} alt="" />
    <div className='size'>
    <img src={group32} alt="" />
    </div>
    </div>
    </div>
   <div>
   <img src={angle3} alt="" />
   <p>Men Henley Neck Full Sleeve Red Wine</p>
   <div className='trending-images'>
    <img src={group26} alt="" />
    <div className='size'>
    <img src={group32} alt="" />
    </div>
    </div>
   </div>
    </div>

    <div className='trend-section'>
   
   <div>
    <img src={rectangle} alt="" />
    <p>Men Hency Neck Full Sleeve Red Wine</p>
    <div className='trending-images'>
    <img src={group26} alt="" />
    <div className='size'>
    <img src={group32} alt="" />
    </div>
    </div>
    </div>
    <div>
    <img src={angle1} alt="" />
    <p>Men Henley Neck Full Sleeve Red Wine </p>
    <div className='trending-images'>
    <img src={group26} alt="" />
    <div className='size'>
    <img src={group32} alt="" />
    </div>
    </div>
    </div>
    <div>
    <img src={angle2} alt="" />
    <p>Men Henley Neck Full Sleeve Red Wine</p>
    <div className='trending-images'>
    <img src={group26} alt="" />
    <div className='size'>
    <img src={group32} alt="" />
    </div>
    </div>
    </div>
   <div>
  
   <img src={group77} alt="" />
   <p>Men Henley Neck Full Sleeve Red Wine</p>
   <div className='trending-images'>
   
    <img src={group26} alt="" />
    <div className='size'>
    <img src={group32} alt="" />
    </div>
    </div>
   </div>
    </div>

    <button className="button">View all</button>
   </>
   
  )
}

export default Trending