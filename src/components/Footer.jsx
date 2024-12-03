import React from 'react';
import '../style/footer.css';
import gmail from '../assets/gmail.webp';
import github from '../assets/github.png';
import linkedin from '../assets/linkedIn.png';
import facebook from '../assets/facebook.avif';
<assets />

function Footer() {
  return (
    <footer class ="footer">
      <ul>
   <li> <a href="noguera.ke@gmail.com"><img src = {gmail} alt = "gmail" width="30"></img></a> </li>
   <li> <a href="https://github.com/KevNoguera"><img src = {github} alt = "github" width="30"></img></a> </li>
   <li> <a href="https://www.linkedin.com/in/kevinno99/"><img src = {linkedin} alt = "linkedIn" width="30"></img></a> </li>
   <li> <a href="https://www.facebook.com/kevin.noguera.10420/"><img src = {facebook} alt = "facebook" width="30"></img></a> </li>
    </ul></footer>
  )
}

export default Footer;