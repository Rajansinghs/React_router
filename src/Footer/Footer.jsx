import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import './App.css';

const Footer = () => {  
    let year = new Date().getFullYear();
    return (
      <>
          <footer className='footer'>
          <div className="name">Rajan Singh</div>
          <p className="para name">Hey! I am just learning on Footer and trying to make something out of the box,
          contact me for hiring. 
          </p>
          <div className="name">
          <a href="https://www.linkedin.com/in/rajan-singh-275608219"><LinkedInIcon className='icon' fontSize='2rem'/></a>
          <a href="https://github.com/Rajansinghs"><GitHubIcon className='icon' fontSize='2rem'/></a>
          <InstagramIcon className='icon' fontSize='2rem'/>
          <CallIcon className='icon' fontSize='2rem'/>
          <EmailIcon className='icon' fontSize='2rem'/>
          </div>
          <p className='name copy'>Copyright © {year}, Some rights are reserved.</p>
          </footer>
      </>
    )
}
export default Footer;
