import React from 'react'
import Profile from '../assets/kevin.png';
import '../style/AboutPage.css';


function About() {
    return (
      <div>
        <h2>About Me</h2>
        <img src={Profile} alt="profile" width ="150" heigth="150" className='pimage' />
        <p>
          Hello, I am a full stack developer in the Rutgers Coding Bootcamp. I have experience in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, and React. I am excited to continue learning and growing as a developer. I am looking forward to working on projects and collaborating with other developers. I am excited to see where my coding journey takes me.
        </p>
      </div>
    )}

export default About;