import React from 'react'
import "../styles/About.css"
import MultiplePizzas from "../assets/masala.jpg";

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}>
            </div>
            <div className='aboutBottom'>
                <h1>ABOUT US</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not
                     simply random text. It has roots in a piece of
                      classical Latin literature from 45 BC, making it
                       over 2000 years old. Richard McClintock, a Latin 
                       professor at Hampden-Sydney College in Virginia, l
                       ooked up one of the more obscure Latin words, consec
                       tetur, from a Lorem Ipsum passage, and going through th
                       e cites of the word in classical literature,  the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                </p>

            </div>
        </div>
    )
}

export default About