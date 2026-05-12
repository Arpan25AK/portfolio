import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ReactFlow, { Background } from 'reactflow'
import 'reactflow/dist/style.css'
import './altPages.css'
import '../App.css'
import bgPic from '../assets/jeremy-bishop-G9i_plbfDgk-unsplash.jpg'

const nodeStyle = (color) => ({
    background: '#2a303c',
    color: '#fff',
    border: `2px solid ${color}`,
    borderRadius: '6px',
    padding: '8px 12px',
    fontSize: '12px',
})

const infraStyle = (color) => ({
    background: '#1f2937',
    color: '#fff',
    border: `2px solid ${color}`,
    borderRadius: '6px',
    padding: '8px 12px',
    fontSize: '12px',
})

const nodes = [
    { id: 'client',      data: { label: 'Client Application' },  position: { x: 0,   y: 160 }, style: { ...nodeStyle('#66d9ed'), borderRadius: '999px' }, draggable: false },
    { id: 'gateway',     data: { label: 'API Gateway' },          position: { x: 180, y: 160 }, style: nodeStyle('#66d9ed'),   draggable: false },
    { id: 'jwt',         data: { label: 'JWT Auth Filter' },      position: { x: 360, y: 160 }, style: nodeStyle('#ef4444'),   draggable: false },
    { id: 'ratelimiter', data: { label: 'Rate Limiter' },         position: { x: 540, y: 160 }, style: nodeStyle('#ef4444'),   draggable: false },
    { id: 'router',      data: { label: 'RouterService' },        position: { x: 720, y: 160 }, style: nodeStyle('#66d9ed'),   draggable: false },
    { id: 'gemini',      data: { label: 'Gemini Strategy' },      position: { x: 920, y: 60  }, style: infraStyle('#a855f7'),  draggable: false },
    { id: 'groq',        data: { label: 'Groq Strategy' },        position: { x: 920, y: 160 }, style: infraStyle('#a855f7'),  draggable: false },
    { id: 'other',       data: { label: 'Other LLMs' },           position: { x: 920, y: 260 }, style: infraStyle('#a855f7'),  draggable: false },
    { id: 'redis',       data: { label: 'Redis (Rate Store)' },   position: { x: 540, y: 320 }, style: infraStyle('#f59e0b'),  draggable: false },
    { id: 'db',          data: { label: 'MySQL (Users)' },        position: { x: 180, y: 320 }, style: infraStyle('#f59e0b'),  draggable: false },
]

const edges = [
    { id: 'e1', source: 'client',      target: 'gateway',     animated: true, style: { stroke: '#66d9ed' } },
    { id: 'e2', source: 'gateway',     target: 'jwt',         animated: true, style: { stroke: '#66d9ed' } },
    { id: 'e3', source: 'jwt',         target: 'ratelimiter', animated: true, style: { stroke: '#ef4444' } },
    { id: 'e4', source: 'ratelimiter', target: 'router',      animated: true, style: { stroke: '#66d9ed' } },
    { id: 'e5', source: 'router', target: 'gemini', animated: true, style: { stroke: '#a855f7', strokeDasharray: '5,5' }, label: 'Model: GEMINI', labelStyle: { fill: '#aaa', fontSize: 10 } },
    { id: 'e6', source: 'router', target: 'groq',   animated: true, style: { stroke: '#a855f7', strokeDasharray: '5,5' }, label: 'Model: GROQ',   labelStyle: { fill: '#aaa', fontSize: 10 } },
    { id: 'e7', source: 'router', target: 'other',            style: { stroke: '#a855f7', strokeDasharray: '5,5' }, label: 'Future Extension', labelStyle: { fill: '#aaa', fontSize: 10 } },
    { id: 'e8', source: 'redis', target: 'ratelimiter',       style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
    { id: 'e9', source: 'db',    target: 'gateway',           style: { stroke: '#f59e0b', strokeDasharray: '5,5' } },
]

function ApiGateWay(){
    const navigate = useNavigate()

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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className='animated-bg'>

            {/* Matrix background */}
            <div className="matrix-container">
                <div className="matrix-pattern">
                    {matrixColumns}
                </div>
            </div>

            {/* Page content */}
            <div className='page-content'>

            <div>
                <button onClick={() => navigate('/')} className='back-button'>
                    <h1>Arpan A K</h1>
                </button>
            </div>

            <div className='side-header'>
                <h3>Middleware Architecture</h3>
                <div className='heading'>
                    API Gateway <br/>
                    (LLM Router)
                </div>
                <h3 style={{marginTop: '30px'}}>Home > Portfolio > ApiGateWay</h3>
            </div>

            <div className='overview-content'>
                <p style={{marginTop:'-4px'}}>
                    The Intelligent AI API Gateway is a Spring Boot middleware engineered to <br/>
                    securely route and manage traffic to multiple LLM providers. It  <br/>
                    authenticates every request through a custom JWT filter, enforces a <br/>
                    sliding-window rate limiter via Redis to prevent abuse, and<br/>
                    dynamically dispatches prompts to Gemini or Groq using the Strategy Pattern <br/>
                    — all backed by a relational user management system.</p>

                <div className='project-meta'>
                    <div className='meta-row'>
                        <div className='meta-item'>
                            <h4>Type</h4>
                            <p>Personal Project</p>
                        </div>
                        <div className='meta-item'>
                            <h4>Technologies</h4>
                            <p>· Java · Spring Boot · Redis <br/>
                                · JWT · Spring Security· MySQL<br/>
                                · Strategy Pattern · REST APIs</p>
                        </div>
                    </div>
                    <div className='meta-item'>
                        <a href='https://github.com/Arpan25AK/ApiGateWayApplication' target='_blank' className='open-project'>
                            Open Project →
                        </a>
                    </div>
                </div>
            </div>

            {/* ── ReactFlow Logic Flow ── */}
            <h2 style={{textAlign: 'center', color: 'white', marginTop: '50px'}}>Logic Flow</h2>

            <div style={{width: '90%', height: '450px', margin: '20px auto', background: 'transparent', borderRadius: '12px'}}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    fitView
                    fitViewOptions={{ padding: 0.2 }}
                    nodesDraggable={false}
                    panOnDrag={false}
                    zoomOnScroll={false}
                    zoomOnPinch={false}
                    zoomOnDoubleClick={false}
                >
                    <Background color="transparent" gap={16} />
                </ReactFlow>
            </div>

            <p className='outro'>
                <span style={{color: 'cyan', textDecoration: 'underline', textDecorationColor: 'cyan'}}>@</span>
                Arpan AK made with passion
            </p>
            </div>
        </div>
    )
}

export default ApiGateWay