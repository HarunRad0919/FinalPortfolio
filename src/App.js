import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faHouse, faSchool, faFile, faPalette, faNetworkWired, faAddressBook} from '@fortawesome/free-solid-svg-icons';
import Profile from './images/Profile.jpg';
import Resume from './Resume/PersonalResume.pdf';
import CCLogo from './images/c++logo.png';
import CLogo from './images/clogo.png';
import CSSLogo from './images/csslogo.png';
import HtmlLogo from './images/htmllogo.png';
import JavaLogo from './images/javalogo.png';
import JSLogo from './images/jslogo.png';
import PythonLogo from './images/pythonlogo.png';
import { useRef } from 'react';
import React from 'react';

function App() {
  const downloadFile = (url) =>{
    const fileName = url.split("/").pop();
    const aTag =document.createElement('a');
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  let targetHome = useRef(null);
  let targetBio = useRef(null);
  let targetKnowledge = useRef(null);
  let targetProjects = useRef(null);
  let targetWork = useRef(null);
  let targetResume = useRef(null);
  let targetContact = useRef(null);

  function scrollTo(ref) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  const handleClickHome = () => {
    targetHome.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickBio = () => {
    targetBio.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickKnowledge = () => {
    targetKnowledge.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickBioProjects = () => {
    targetProjects.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickBioWork = () => {
    targetWork.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickBioResume = () => {
    targetResume.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickBioContact = () => {
    targetContact.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <html>
      <body>
        <div className="Background">
        <div className='menu'>
            <ul onClick={() => console.log("test")}>
              <li><a href="#Homepage" onClick={handleClickHome}><FontAwesomeIcon icon = {faHouse}></FontAwesomeIcon></a></li>
              <li><a href="#Bio" onClick={handleClickBio}><FontAwesomeIcon icon = {faUser}></FontAwesomeIcon></a></li>
              <li><a href="#Knowledge" onClick={handleClickKnowledge}><FontAwesomeIcon icon = {faSchool}></FontAwesomeIcon></a></li>
              <li><a href="#Projects"onClick={handleClickBioProjects}><FontAwesomeIcon icon = {faPalette}></FontAwesomeIcon></a></li>
              <li><a href="#WorkandSkills"onClick={handleClickBioWork}><FontAwesomeIcon icon = {faNetworkWired}></FontAwesomeIcon></a></li>
              <li><a href="#Resume" onClick={handleClickBioResume}><FontAwesomeIcon icon = {faFile}></FontAwesomeIcon></a></li>
              <li><a href="#Contact" onClick={handleClickBioContact}><FontAwesomeIcon icon = {faAddressBook}></FontAwesomeIcon></a></li>
            </ul>
          </div>
          <div className = 'container'>
            <section className = 'Homepage' ref = {targetHome}>
              <h1>
                Welcome to my page! 
              </h1>
              <div class = "arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </section>

            <section className = 'Bio' ref={targetBio}>
              <div>
                <img src={Profile} alt="" className='profileImg'/>
              </div>
              <h1>
                My name is Harun Radoncic and I am a first generation Bosnian-American senior at the University of Missouri - Kansas City and am majoring in Computer Science. 
                My main interests in the field is AI, Software Development and as of recent Web Development.
                Some goals of mine are to one day create a piece of software that allow to express my own creative ideas and allow me to support my friends and family with my own ideas.
              </h1>
            </section>

            <section className = 'Knowledge' ref={targetKnowledge}>
              <div className='dur'>
                <h1>
                  Educational Background
                </h1>
                <h2>
                  Languages known:
                </h2>
              </div>
              <div className='dur'>
                <img src={CCLogo} alt="" className='CCLogo'/>
                <img src={CLogo} alt="" className='CLogo'/>
                <img src={CSSLogo} alt="" className='CSSLogo'/>
                <img src={HtmlLogo} alt="" className='HtmlLogo'/>
                <img src={JavaLogo} alt="" className='JavaLogo'/>
                <img src={JSLogo} alt="" className='JSLogo'/>
                <img src={PythonLogo} alt="" className='PythonLogo'/>
                </div>
              <div className='dur'>
                <h3>
                  Courses taken:
                </h3>
              </div>
              <div className='dur'>
                <h4>
                Some of the courses I have taken throughout my academic career are AI, computer networking, operating systems, programming language design, database management and many more!<br></br><br></br>
               Some courses that I am interested in dipping my toes into when I finish my bachelors here at UMKC are web development, software development, vr implementation and game development. 
                </h4>   
              </div>
            </section>

            <section className='Projects' ref={targetProjects}>
              <div className='Assignments'>
                <h1>
                  Projects Completed
                </h1>
                <h2>
                  Schedule Generation:
                </h2>
                <h3>
                  In this project I used a concept I learned in my AI class called Genetic Algorithms to make a schedule generator for students. This program took in specific requirements students wanted like preferred times, professors and class and generated thousands of generations to find the best fit class for the student.
                </h3>
                <h2>
                  GPS Application:
                </h2>
                <h3>
                  In this project I used another concept I learned in my AI class called best-first search to make a GPS application to find the fastest possible route from given cities given to me. 
                </h3>
                <h2>
                  Parser and Scanner:
                </h2>
                <h3>
                  In this project I created a language specific parser and scanner in Racket. I took in specific requirements needed for the language and checked if the programs created with the language had any specifc types of errors.
                </h3>
              </div>
            </section>

            <section className = 'WorkandSkills' ref={targetWork}>
              <div className='Work'>
                <h1>
                  Work and Skills
                </h1>
                <h2>
                  Work Experience:
                </h2>
                <h4>
                  <ol>
                    <li>
                      Dicks Sporting Goods Sales Representative 
                    </li>
                    <li>
                      Google Fiber Door to Door Representative 
                    </li>
                    <li>
                      Google Fiber Retail Representative 
                    </li>
                  </ol>
                </h4>
                <h3>
                  Skills Obtained:
                </h3>
                <h5>
                  <ol>
                    <li>
                      Personable
                    </li>
                    <li>
                      Goal Driven
                    </li>
                    <li>
                      Problem Solver
                    </li>
                    <li>
                      Leader
                    </li>
                    <li>
                      Communication
                    </li>
                    <li>
                      Creative
                    </li>
                    <li>
                      Bilingual
                    </li>
                  </ol>
                </h5>
                <h4>
                  When I first entered the workforce I believed that it wasn't just to make money. I didn't want to waste my time and just flip burgers and wanted to learn skills that could improve my skills later in life. I sought out to learn how to sell to anyone and to get more insight on the business world as a whole. I began with selling shoes and athletic wear and decided that I needed something that could push me a bit more and landed a job at Google Fiber where I strive to achieve sales goals and other quotas that push me to do better each and every time.
                </h4>
              </div>
            </section>

            <section className = 'Resume' ref={targetResume}>
              <div className='download' onClick={()=>downloadFile(Resume)}>
                <a href = "#">Download</a>
              </div>
              <h1>
                <iframe src = {Resume}></iframe>
              </h1>
            </section>

            <section className = 'Contact' ref={targetContact}>
              <div className='contactInfo'>
                <h1>
                  Contact Information:
                </h1>
                <h2>
                  Email: Harunrad0919@gmail.com
                </h2>
                <h2>
                  Phone Number: 816-728-8034
                </h2>
                <h2>
                  LinkedIn = 
                  <a href = "https://www.linkedin.com/in/harun-radoncic-42284a237/">
                      Harun Radoncic
                  </a>
                </h2>
              </div>
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
