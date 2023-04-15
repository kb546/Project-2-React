import React from 'react';
import RITLogo from '../../Images/RIT_Logo.jpg';

function Navbar() {
  return (
    <nav>
      <div className='ritLogo'>
                <a href="#App"><img src={RITLogo} alt=''/></a>
            </div> 
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#people">People</a></li>
        <li><a href="#degrees">Degrees</a></li>
        <li><a href="#minors">Minors</a></li>
        <li><a href="#employment">Employment</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
