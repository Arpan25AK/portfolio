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

const groupStyle = (label) => ({
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '8px',
    color: '#aaa',
    fontSize: '11px',
    padding: '8px 12px',
    // ReactFlow group node — label shown via data.label
})

// ── Node definitions ──────────────────────────────────────────────
// Layout mirrors the screenshot:
//   [Upstream] → [Producer API] → [Kafka Topic]  →  [Event Listener] → [Thymeleaf] → [Email Svc] → [User Inbox]
//                  └── Message Broker group ──┘    └────────── Sentinel Notification Engine group ──────────┘

const nodes = [
    // Standalone endpoints
    {
        id: 'upstream',
        data: { label: 'Upstream Services / Client' },
        position: { x: 0, y: 140 },
        style: { ...nodeStyle('#66d9ed'), borderRadius: '999px' },
        draggable: false,
    },
    {
        id: 'userInbox',
        data: { label: 'User Inbox' },
        position: { x: 1120, y: 140 },
        style: { ...nodeStyle('#66d9ed'), borderRadius: '999px' },
        draggable: false,
    },

    // ── Message Broker group ──
    {
        id: 'brokerGroup',
        data: { label: 'Message Broker' },
        position: { x: 160, y: 60 },
        style: {
            ...groupStyle(),
            width: 340,
            height: 180,
            pointerEvents: 'none',
            zIndex: -1,
        },
        draggable: false,
        selectable: false,
    },
    {
        id: 'producer',
        data: { label: 'Event Producer API' },
        position: { x: 195, y: 130 },
        style: nodeStyle('#66d9ed'),
        draggable: false,
        parentNode: undefined,
    },
    {
        id: 'kafka',
        data: { label: 'Kafka Topic: user-events' },
        position: { x: 370, y: 130 },
        style: infraStyle('#f59e0b'),
        draggable: false,
    },

    // ── Sentinel Notification Engine group ──
    {
        id: 'sentinelGroup',
        data: { label: 'Sentinel Notification Engine' },
        position: { x: 560, y: 60 },
        style: {
            ...groupStyle(),
            width: 470,
            height: 180,
            pointerEvents: 'none',
            zIndex: -1,
        },
        draggable: false,
        selectable: false,
    },
    {
        id: 'listener',
        data: { label: 'Event Listener' },
        position: { x: 590, y: 130 },
        style: {
            ...nodeStyle('#66d9ed'),
            borderRadius: '0',
            transform: 'rotate(45deg)',
            width: '70px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
            fontSize: '10px',
            textAlign: 'center',
        },
        draggable: false,
    },
    {
        id: 'thymeleaf',
        data: { label: 'Thymeleaf Template Engine' },
        position: { x: 760, y: 130 },
        style: nodeStyle('#66d9ed'),
        draggable: false,
    },
    {
        id: 'emailSvc',
        data: { label: 'Email Service' },
        position: { x: 960, y: 130 },
        style: nodeStyle('#66d9ed'),
        draggable: false,
    },
]

// ── Edge definitions ──────────────────────────────────────────────
const edges = [
    // Upstream → Producer
    {
        id: 'e-up-prod',
        source: 'upstream',
        target: 'producer',
        animated: true,
        style: { stroke: '#66d9ed' },
    },
    // Producer → Kafka
    {
        id: 'e-prod-kafka',
        source: 'producer',
        target: 'kafka',
        animated: true,
        label: 'Publishes UserEvent',
        labelStyle: { fill: '#aaa', fontSize: 10 },
        style: { stroke: '#f59e0b' },
    },
    // Kafka → Listener
    {
        id: 'e-kafka-listener',
        source: 'kafka',
        target: 'listener',
        animated: true,
        label: 'Consumes Event',
        labelStyle: { fill: '#aaa', fontSize: 10 },
        style: { stroke: '#66d9ed' },
    },
    // Listener → Thymeleaf (top path — WELCOME)
    {
        id: 'e-listener-thy-welcome',
        source: 'listener',
        target: 'thymeleaf',
        animated: true,
        label: 'Event: WELCOME',
        labelStyle: { fill: '#aaa', fontSize: 10 },
        style: { stroke: '#a855f7', strokeDasharray: '5,5' },
    },
    // Listener → Thymeleaf (bottom path — SECURITY_ALERT)
    {
        id: 'e-listener-thy-alert',
        source: 'listener',
        target: 'thymeleaf',
        animated: true,
        label: 'Event: SECURITY_ALERT',
        labelStyle: { fill: '#aaa', fontSize: 10 },
        style: { stroke: '#ef4444', strokeDasharray: '5,5' },
    },
    // Thymeleaf → Email Service
    {
        id: 'e-thy-email',
        source: 'thymeleaf',
        target: 'emailSvc',
        animated: true,
        label: 'Renders HTML',
        labelStyle: { fill: '#aaa', fontSize: 10 },
        style: { stroke: '#66d9ed' },
    },
    // Email Service → User Inbox
    {
        id: 'e-email-inbox',
        source: 'emailSvc',
        target: 'userInbox',
        animated: true,
        label: 'SMTP Protocol',
        labelStyle: { fill: '#aaa', fontSize: 10 },
        style: { stroke: '#66d9ed' },
    },
]

function Sentinel() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className='bg'>
                <img src={bgPic} alt="bgPic" />
            </div>

            <div>
                <button onClick={() => navigate('/')} className='back-button'>
                    <h1>Arpan A K</h1>
                </button>
            </div>

            <div className='side-header'>
                <h3>Event - Driven Architecture</h3>
                <div className='heading'>
                    Sentinel <br />
                    (Notification Service)
                </div>
                <h3 style={{ marginTop: '30px' }}>Home &gt; Portfolio &gt; Sentinel</h3>
            </div>

            <div className='overview-content'>
                <p style={{ marginTop: '-4px' }}>
                    Sentinel is a Spring Boot microservice built to asynchronously handle user <br />
                    lifecycle events and deliver dynamic email notifications. Upstream services <br />
                    publish events to an Apache Kafka topic, fully decoupling them from the <br />
                    email delivery pipeline. A dedicated Kafka consumer routes each payload <br /> to the appropriate Thymeleaf template — generating rich HTML emails <br />
                    for events like user registration or security alerts — which are then dispatched via Spring Mail over SMTP.</p>

                <div className='project-meta'>
                    <div className='meta-row'>
                        <div className='meta-item'>
                            <h4>Type</h4>
                            <p>Personal Project</p>
                        </div>
                        <div className='meta-item'>
                            <h4>Technologies</h4>
                            <p>· Java · Spring Boot · SMTP <br />
                                · Spring Mail · Thymeleaf · Apache Kafka</p>
                        </div>
                    </div>
                    <div className='meta-item'>
                        <a href='https://github.com/Arpan25AK/Sentinel' target='_blank' className='open-project'>
                            Open Project →
                        </a>
                    </div>
                </div>
            </div>

            {/* ── ReactFlow Logic Flow ── */}
            <h2 style={{ textAlign: 'center', color: 'white', marginTop: '50px' }}>Logic Flow</h2>

            <div style={{ width: '90%', height: '450px', margin: '20px auto', background: 'transparent', borderRadius: '12px' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    fitView
                    fitViewOptions={{ padding: 0.25 }}
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
                <span style={{ color: 'cyan', textDecoration: 'underline', textDecorationColor: 'cyan' }}>@</span>
                Arpan AK made with passion
            </p>
        </div>
    )
}

export default Sentinel