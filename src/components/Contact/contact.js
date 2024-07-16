import React, { useRef } from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebookk from '../../assets/facebook.png';
import Facebook from '../../assets/facebook-icon.png';
import Twitter from '..//..//assets/twitter.png';
import Instagram from '..//..//assets/instagram.png';
import Youtube from '..//..//assets/youtube.png';
import emailjs from '@emailjs/browser';
// import { BrowserRouter , Link } from 'react-router-dom';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_qgs09we', 'template_bx9qvms', form.current, {
            publicKey: 'Jo12ge6EF2Q8UMCQn',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id="contactPage">
        <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
            I have the opp to work with these comapnies and i had serve them i n amuc hbeteer way but stikl here i am makin this portfpoio
        </p>
        <div className="clientImgs">
        <img src={Walmart} alt="Walmart" className="clientImg" />
        <img src={Adobe} alt="Adobe" className="clientImg" />
        <img src={Microsoft} alt="Microsoft" className="clientImg" />
        <img src={Facebookk} alt="Facebook" className="clientImg" />
        </div>

        </div>


        <div id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the frm beow to discuss any work oppurtinities</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name' />
                <input type="email" className="email" placeholder='Your Email' name='your_email' />
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                <img src={Facebook} href alt="Facebook" className="link" />
                <img src={Instagram} alt="Instagram" className="link" />
                <img src={Youtube} alt="Youtube" className="link" />
                <img src={Twitter} alt="Twitter" className="link" />
                </div>

                  



            </form>


        </div>
    </section>
  )
}

export default Contact