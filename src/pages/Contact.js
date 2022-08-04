import React, { useState } from 'react'
import "../styles/Contact.css"
import PizzaLeft from "../assets/fooda.jpeg"
import { Input, TextField } from '@mui/material'

function Contact() {
    const [submitValue, setSubmitValue] = useState(false);
    const title =()=>{
        if(submitValue===true){
            return <h2>Message tranfered</h2>
        }
    }
  return (
    <div className='contact'>
       
         <div className='leftSide' style={{backgroundImage: `url(${PizzaLeft})`}}>
         </div>
         <div className='rightSide'>
            <h1>Contact Us</h1>
            { title()}
            <form id="contact-form">
                <TextField id="outlined-basic"  label="Enter Your Full Name ..." variant="outlined" style={{marginTop:'20px'}} required />
                <TextField id="outlined-basic" label="Enter Your Email Address ..." variant="outlined" style={{marginTop:'20px'}} required />
                <TextField  required
                label="Enter Your text Message ..." variant="outlined"id="outlined-multiline-flexible"
                multiline
                maxRows={6} style={{marginTop:'20px'}} />
                <button type='submit' onClick={()=>{setSubmitValue(true)}}> Send Message</button>
                
            </form>

         </div>

    </div>
  )
}

export default Contact