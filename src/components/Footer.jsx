import React from 'react'

const Footer = () => {
  return (
     <>
     <div className='footer-section'>
     <div className="shopping">
        <h5>Online shopping</h5>
        <ul>
          <li>Men's T-Shirts</li>
          <li>Women's Wear</li>
          <li>Winter Collections</li>
          <li>Hooded t-shirts</li>
          <li>streetwear collections</li>
        </ul>
      </div>
      <div className="shopping">
        <h5>customer policies</h5>
        <ul>
          <li className='about'>About Us</li>
          <li>Terms & Conditions</li>
          <li>Shipping & Returns Policy</li>
          <li>Cancellation & Refund Policy</li>
          <li className='about'>Contact Us</li>
        </ul>
      </div>
      <div className="shopping">
        <h5>store information</h5>
        <ul>
          <p className='map'> <i class="ri-map-pin-2-line" ></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisqua</p>
          <li className='contact'> <i class="ri-phone-line"></i>Contact Us: 748392938424</li>
          <li><i class="ri-mail-line"></i>Email Us: abcd@yourgmail.com</li>
          
        </ul>
      </div>
      <div className="p-section">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis minus autem labore, iste nisi, ipsam consectetur sed tenetur temporibus obcaecati deserunt saepe quia, quidem tempora similique libero distinctio! Cupiditate similique minima omnis doloribus odio itaque aspernatur magnam ducimus, ratione iusto!</p>
       
      </div>
      {/* <div className="icons-1">
      <ul>
        <li><i class="ri-facebook-circle-fill"></i></li>
        <li><i class="ri-twitter-fill"></i></li>
        <li><i class="ri-instagram-line"></i></li>
        <li><i class="ri-linkedin-box-fill"></i></li>
      </ul>
     </div> */}
     </div>
     <div className='dummy'>
      <p> 2022-23 Powered by adipisicing elit. Laborum, esse
      </p>
     </div>
   
     </>
  )
}

export default Footer