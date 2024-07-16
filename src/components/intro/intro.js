import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'
import { Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className='introText'>I'm <span className="introName">Sawan</span><br/>Website Desginer</span>
            <p className="introPara">I am a skilled Web Developer and have build a lot of projects.<br/> I also work on IOT Projects</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
        </div>

        <img src={bg} alt="Profile" className="bg" />
    </section>
    )
}

export default Intro