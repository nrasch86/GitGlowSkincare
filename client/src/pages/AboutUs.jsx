import { Container } from 'react-bootstrap';
//import { useState } from 'react';//
import Img1 from '../assets/Prodimg1.png'
import Img2 from '../assets/Prodimg2.png'
import Img3 from '../assets/Prodimg3.png'
import Img4 from '../assets/Prodimg4.png'
import Img5 from '../assets/Prodimg5.png'
import '../CSS/AboutUs.css'

const AboutUs = () => {
  return (
<>
<Container fluid className="about-wrapper">
<div className="about-left">
  <h3>About Us</h3>
</div>
<div className="about-right">

<div className="par-bg" >
  <p className="box" > 
<h5>Welcome to GitGlow,</h5> where innovation meets skincare expertise! Founded by a group of passionate programming students, 
we are on a mission to revolutionize skincare for fellow coders. Fueled by our love for technology and a desire to tackle 
the effects of blue light, we've combined our programming powers with skincare science to create a range of products tailored 
specifically for those who spend hours in front of screens. At GitGlow, we believe that taking care of your skin shouldn't be a 
hassle , it should be as seamless as writing code. With our refreshing serums, soothing masks, and cutting-edge solutions, you 
can code with confidence, knowing that your skin is in good hands. Join us in embracing the beauty of technology and discover 
a brighter, smoother complexion with GitGlow, where innovation and skincare unite!
  </p>
  </div>
</div>
</Container>

<h4>Preview of our products</h4>
<div className="imgs-container" >
  <img className="prodimg" src={Img1} alt="blue dropper" />
  <img className="prodimg" src={Img3} alt="blue dropper" />
  <img className="prodimg" src={Img2} alt="blue dropper" />
  <img className="prodimg" src={Img4} alt="blue dropper" />
  <img className="prodimg" src={Img5} alt="blue dropper" />
</div>
</>
  );
};

export default AboutUs;
