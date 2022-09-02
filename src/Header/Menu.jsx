import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ContactsIcon from '@mui/icons-material/Contacts';

const Menu = () => {
  return (
    <>
    <div className="navbar">
      <div className="logo">Portfo<span>lio.</span></div>
      <ul className="list">
      <li><Link to='/'><div className="n_icon"><HomeIcon className='please'/>Home</div></Link></li>
        <li><Link to='/about'><div className="n_icon"><AccountCircleIcon />About</div></Link></li>
        <li><Link to='/skill'><div className="n_icon"><AddTaskIcon />Skill</div></Link></li>
        <li><Link to='/contact'><div className="n_icon"><ContactsIcon />Contact</div></Link></li>
      </ul>
    </div>
    </>
  );
};

export default Menu;
