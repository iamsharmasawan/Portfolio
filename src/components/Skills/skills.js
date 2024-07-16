import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/ui-design.png';
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className="skillDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam magni similique nostrum explicabo quidem mollitia qui dolorem nemo voluptates?
            </span>

            <div className="skillbars">
                <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2 className='head'>UI/UX Design</h2>
                    <p>This is a Demo text Okayyyy Lorem ipsum dolor  ipsa nemo molestias!</p>
                </div>
                </div>

                <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2 className='head'>Web Design</h2>
                    <p>I am a Web Developer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, esse?</p>
                </div>
                </div>

                <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2 className='head'>App Design</h2>
                    <p>I am an Application Designer</p>
                </div>
                </div>
            </div>
            
        </section>
    );
}

export default Skills