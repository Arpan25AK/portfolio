import { useNavigate } from 'react-router-dom'
import '../App.css'
import blockImg from '../assets/blockImg.png'
import helloimg from '../assets/hello-world-html-code-768x384.png'

function Home() {
  const navigate = useNavigate()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const matrixColumns = Array.from({ length: 60 }, (_, i) => (
      <div
          key={i}
          className="matrix-column"
          style={{
            left: `${(i / 60) * 100}vw`,
            animationDuration: `${2.3 + Math.random() * 2.2}s`,
            animationDelay: `-${Math.random() * 4}s`,
          }}
      />
  ))

  return (
      <div className='animated-bg'>

        {/* Matrix background */}
        <div className="matrix-container">
          <div className="matrix-pattern">
            {matrixColumns}
          </div>
        </div>

        {/* Page content */}
        <div className='page-content'>

          <div className='header'>
            <h1>Arpan A K</h1>
            <div className='nav'>
              <h3 onClick={() => scrollTo('hero')} style={{cursor:'pointer'}}>Home</h3>
              <h3 onClick={() => scrollTo('skills')} style={{cursor:'pointer'}}> // skills </h3>
              <h3 onClick={() => scrollTo('projects')} style={{cursor:'pointer'}}> // projects</h3>
              <h3 onClick={() => scrollTo('experience')} style={{cursor:'pointer'}}> // Experience</h3>
              <h3 onClick={() => scrollTo('contacts')} style={{cursor:'pointer'}}> // Contact</h3>
            </div>
          </div>

          <img src={blockImg} alt="blockImg" className='block-img' style={{position : 'absolute'}} />

          <div id='hero' className='sec-header'>
            <p><span>ARPAN A K</span></p>
          </div>

          <div className='contents'>
            FullStack Software Developer <br />
            & <br />
            Ai Enthusiast
          </div>

          <div id='skills' className='content-header'>
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

          <div className='helloImg'>
            <img src={helloimg} alt="helloimg" />
          </div>

          <div id='projects' className='content-header'>
            <h1>Projects</h1>
          </div>

          <div className='projects-grid'>
            <div className='card' onClick={() => navigate('/devflow')}>
              <div className='align'>
                <div className='red'></div>
                <div className='yellow'></div>
                <div className='green'></div>
              </div>
              <h2>DevFlow</h2>
              <p>Event-driven microservices version control platform using Java, Spring Boot, Kafka and PostgreSQL.</p>
            </div>

            <div className='card' onClick={() => navigate('/apigateway')}>
              <div className='align'>
                <div className='red'></div>
                <div className='yellow'></div>
                <div className='green'></div>
              </div>
              <h2>ApiGateWay</h2>
              <p>Scalable API Gateway with JWT auth, Redis rate limiter and dynamic routing for Gemini and Groq.</p>
            </div>

            <div className='card' onClick={() => navigate('/sentinel')}>
              <div className='align'>
                <div className='red'></div>
                <div className='yellow'></div>
                <div className='green'></div>
              </div>
              <h2>Sentinel</h2>
              <p>Async notification microservice using Kafka for real-time event-driven email dispatch.</p>
            </div>

            <div className='card' onClick={() => navigate('/chatbot')}>
              <div className='align'>
                <div className='red'></div>
                <div className='yellow'></div>
                <div className='green'></div>
              </div>
              <h2>ChatBot</h2>
              <p>RAG chatbot using OpenAI GPT-4o with semantic search via all-mpnet-base-v2 embeddings.</p>
            </div>
          </div>

          <div id='experience' className='content-header' style={{marginTop: '200px'}}>
            <h1>Prior <br/>
              Experience</h1>
            <div>
              <button onClick={() => navigate('/experience')} className='back-button'
                      style={{textDecoration: 'underline', textDecorationColor: 'antiquewhite' , marginTop: '-40px', marginLeft: '-5px'}}>
                <h1>See Experience</h1>
              </button>
            </div>
          </div>


          <div id='contacts' className='content-header' style={{marginTop : '250px'}}>
            <h1>contacts</h1>
            <div className='social-contacts'>
              <a href="https://github.com/Arpan25AK" target='_blank' className='social-contacts'> Github</a> <br/>
              <a href="https://www.linkedin.com/in/arpan-anand-kotian-104897364/" target='_blank' className='social-contacts' style={{marginTop : '80px'}}>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home