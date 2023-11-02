import React from 'react'
import Trending from './Trending';
import FeatureProducts from './FeatureProducts';
import NewCollection from './NewCollection';
import Footer from './Footer';
 import Group2 from '../images/Group 2.png';
 import Group3 from '../images/Group 3.png'
 import  Frame from '../images/Frame.png'
 import  Frame3 from '../images/Frame 3.png';
 import Frame2 from '../images/Frame 2.png';
 import Frame1 from '../images/Frame 1.png';
 import Image1 from '../images/image 1.png';
 import Group1 from '../images/Group 1.png'
 import Group4 from '../images/Group 4.png'
 import Group5 from '../images/Group 5.png'
 import Group6 from '../images/Group 6.png'
 import Group7 from '../images/Group 7.png'
 import Group8 from '../images/Group 8.png'
  import image2 from '../images/image 2.png';
  import image3 from '../images/image 3.png';
  import image4 from '../images/image 4.png';
  import image5 from '../images/image 5.png';
  import image6 from '../images/image 6.png';
  
const Home = () => {
  return (
    <>
    <div className='group-2'>
        <div>
            <p>Welcome to our Hascraves</p>
        </div>
        <div>
            <img src={Group2} alt="" />
        </div>
        </div>
    <div className="group-3">
     <div className='bar'>
      <img src={Group3}  alt="" />
     </div>
     <p>Logo Here</p>
     <div className='frame'>
      <img src={Frame} alt="" />
      <img src={Frame3} alt="" />
      <img src={Frame2} alt="" />
      <img src={Frame1} alt="" />
     </div>
    </div>

    <div className="group-4">
      <div>
        <img src={Image1} alt="" />
      </div>
    </div>


    <div className="group-5">
    
    
   <div>
        <img src={Group1} alt="" />
        <p>Men's T-Shirt</p>
        </div>
        <div>
        <img src={Group4} alt="" />
        <p>Women's Wear</p>
        </div>
       <div>
       <img src={Group5} alt="" />
       <p>Winter Collections</p>
      
    
   </div>
   </div>
  
     <div className='group5-section-two'>
     <div>
       <img src={Group6} alt="" />
       <p>Hooded T-shirts</p>
       </div>
       <div>
       <img src={Group7} alt="" />
      <p>Polo Neck T-Shirts</p>
       </div>
       <div>
       <img src={Group8} alt="" />
       <p>Full Sleeves T-Shirts</p>
       </div>
    
       
      
    </div>  

    <div className="group-6">
      <div className='images-1'>
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
        
    </div>
    <div className='image-2'>
        <img src={image4} alt="" />      
        <img src={image6} alt="" />
        <img src={image5} alt="" />
      </div> 
   
    <Trending />
    <FeatureProducts />
    <NewCollection />
    <Footer />
    </>
   
  )
}

export default Home