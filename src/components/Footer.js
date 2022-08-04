import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react'
import "../styles/Footer.css";
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/><Twitter/><Facebook/><LinkedIn/>
        </div>
        <p>&copy; 2022 Suchit_Indian_Food.com</p>
    </div>
  )
}

export default Footer