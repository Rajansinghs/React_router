import React from 'react';
import Image from '../Image/porfolio.jpg';

const Home = () => {
  return (
    <>/
       <div className="container">
       <div className="conte">
        <div className="headline">Hello!</div>
        <div className="head2">My name is Rajan Singh</div>
        <p className="mine">I am a <span>Frontend Web Developer</span> and I use also react js.I am developing websites 
        since 2021 and love to design and also want to be a <br /><span>Full Stack web Developer.</span></p>
        </div>
        <div className='i_center'><img src={Image} className="image"/></div>
       </div> 
    </>
  )
}

export default Home;
