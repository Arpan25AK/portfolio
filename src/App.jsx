import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import bgPic from './assets/jeremy-bishop-G9i_plbfDgk-unsplash.jpg'
import blockImg from './assets/blockImg.png'

function App(){
  return(
    <div>
      
      <div className='bg'>
        <img src={bgPic} alt="bgPic" />
      </div>


      <div className='header'>
          <h1>Arpan A K</h1>
            <div className='nav'>
              <h3>Home</h3>
              <h3> // skills </h3>
              <h3> // projects</h3>
              <h3> // Experience</h3>
              <h3> // Contact</h3>

            </div>
      </div>

        <img src={blockImg} alt="blockImg" className='block-img' />

      <div className='sec-header'>
        <p><span>ARPAN A K</span></p>
      </div>

      <div  className = 'contents'>
        FullStack Software Developer <br />
                   & <br />
              Ai Enthusiast
      </div>
      

      <div className='content-header'>
        <h1>Skills</h1>
      </div>

      <div className='skill-grid'>
  <div className='skill-card'>
    <h2>BackEnd</h2>
    <p className='tag'>&lt;h3&gt;</p>
    <p className='card-desc'>Experienced in building robust server-side applications using Java and Spring Boot. Familiar with JWT authentication, event-driven architecture with Kafka.</p>
    <p className='tag'>&lt;/h3&gt;</p>
  </div>
  <div className='skill-card'>
    <h2>FrontEnd</h2>
    <p className='tag'>&lt;h3&gt;</p>
    <p className='card-desc'>Passionate about building responsive UIs. Experienced in HTML5, CSS, JavaScript and React for building modern web applications.</p>
    <p className='tag'>&lt;/h3&gt;</p>
  </div>
</div>

    </div>
  )
}

export default App


