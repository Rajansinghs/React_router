import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <>
    <div className='content'>
    <h1>    Contact Me</h1> <hr />
    <div className="con_box">
      <a href="https://www.linkedin.com/in/rajan-singh-275608219"><LinkedInIcon  className='left' fontSize='5rem'/></a>
          <a href="https://github.com/Rajansinghs"><GitHubIcon  className='left' fontSize='5rem'/></a>
          <InstagramIcon className='left' fontSize='5rem'/>
          <CallIcon className='left' fontSize='5rem'/>
          <EmailIcon className='left' fontSize='5rem'/>
          </div>
          </div>
    </>
  );
};

export default Contact;
