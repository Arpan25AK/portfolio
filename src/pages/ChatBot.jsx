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

// ── Group box drawn as a plain div-style node (no label buried) ──
const groupBoxStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.18)',
    borderRadius: '8px',
    width: '420px',
    height: '220px',
    pointerEvents: 'none',
    zIndex: 0,
}

// ── Visible group label node ──
const groupLabelStyle = {
    background: 'transparent',
    color: '#ccc',
    fontSize: '11px',
    border: 'none',
    padding: '0',
    pointerEvents: 'none',
}

const nodes = [
    // ── AI Generation Layer group box + label ──
    {
        id: 'aiGroupBox',
        data: { label: '' },
        position: { x: 420, y: 20 },
        style: { ...groupBoxStyle, width: '240px', height: '160px' },
        draggable: false,
        selectable: false,
    },
    {
        id: 'aiGroupLabel',
        data: { label: 'AI Generation Layer' },
        position: { x: 460, y: 28 },
        style: groupLabelStyle,
        draggable: false,
        selectable: false,
    },

    // ── GPT-4o node (inside AI group) ──
    {
        id: 'gpt',
        data: { label: 'GPT-4o\nGitHub Models API' },
        position: { x: 460, y: 80 },
        style: { ...infraStyle('#a855f7'), textAlign: 'center', whiteSpace: 'pre-line' },
        draggable: false,
    },

    // ── Knowledge Retrieval Layer group box + label ──
    {
        id: 'krlGroupBox',
        data: { label: '' },
        position: { x: 80, y: 220 },
        style: { ...groupBoxStyle, width: '820px', height: '230px' },
        draggable: false,
        selectable: false,
    },
    {
        id: 'krlGroupLabel',
        data: { label: 'Knowledge Retrieval Layer' },
        position: { x: 420, y: 228 },
        style: groupLabelStyle,
        draggable: false,
        selectable: false,
    },

    // ── User Terminal ──
    {
        id: 'userTerminal',
        data: { label: 'User Terminal' },
        position: { x: 0, y: 310 },
        style: { ...nodeStyle('#66d9ed'), borderRadius: '999px' },
        draggable: false,
    },

    // ── RAG Chatbot Application ──
    {
        id: 'rag',
        data: { label: 'RAG Chatbot Application' },
        position: { x: 150, y: 295 },
        style: nodeStyle('#66d9ed'),
        draggable: false,
    },

    // ── Embedding Model ──
    {
        id: 'embedding',
        data: { label: 'Embedding Model\nmpnet-base-v2' },
        position: { x: 430, y: 285 },
        style: { ...nodeStyle('#a855f7'), textAlign: 'center', whiteSpace: 'pre-line' },
        draggable: false,
    },

    // ── ChromaDB ──
    {
        id: 'chroma',
        data: { label: 'ChromaDB\nVector Store' },
        position: { x: 700, y: 295 },
        style: { ...infraStyle('#f59e0b'), textAlign: 'center', whiteSpace: 'pre-line', borderRadius: '50% 50% 8px 8px' },
        draggable: false,
    },
]

const edges = [
    // User Terminal → RAG App
    {
        id: 'e-user-rag',
        source: 'userTerminal',
        target: 'rag',
        animated: true,
        style: { stroke: '#66d9ed' },
    },
    // RAG → Embedding (1. User Query)
    {
        id: 'e-rag-embed',
        source: 'rag',
        target: 'embedding',
        animated: true,
        label: '1. User Query',
        labelStyle: { fill: '#aaa', fontSize: 10 },
        style: { stroke: '#66d9ed' },
    },
    // Embedding → ChromaDB (2. Vector Search)
    {
        id: 'e-embed-chroma',
        source: 'embedding',
        target: 'chroma',
        animated: true,
        label: '2. Vector Search',
        labelStyle: { fill: '#aaa', fontSize: 10 },
        style: { stroke: '#a855f7' },
    },
    // ChromaDB → RAG (3. Relevant Context)
    {
        id: 'e-chroma-rag',
        source: 'chroma',
        target: 'rag',
        animated: true,
        label: '3. Relevant Context',
        labelStyle: { fill: '#aaa', fontSize: 10 },
        style: { stroke: '#f59e0b', strokeDasharray: '5,5' },
    },
    // RAG → GPT-4o (4. Prompt + Context)
    {
        id: 'e-rag-gpt',
        source: 'rag',
        target: 'gpt',
        animated: true,
        label: '4. Prompt + Context',
        labelStyle: { fill: '#aaa', fontSize: 10 },
        style: { stroke: '#a855f7', strokeDasharray: '5,5' },
    },
    // GPT-4o → RAG (5. Accurate Answer)
    {
        id: 'e-gpt-rag',
        source: 'gpt',
        target: 'rag',
        animated: true,
        label: '5. Accurate Answer',
        labelStyle: { fill: '#aaa', fontSize: 10 },
        style: { stroke: '#66d9ed', strokeDasharray: '5,5' },
    },
]

function ChatBot() {
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
                <h3>Retrieval-Augmented Generation</h3>
                <div className='heading'>
                    One Piece <br />
                    RAG Chatbot
                </div>
                <h3 style={{ marginTop: '30px' }}>Home &gt; Portfolio &gt; OnePieceRAG</h3>
            </div>

            <div className='overview-content'>
                <p style={{ marginTop: '-4px' }}>
                    An intelligent, terminal-based AI chatbot built using Retrieval-Augmented<br />
                    Generation (RAG). It processes raw One Piece lore text, stores it in a <br />
                    local vector database, and leverages GPT-4o to answer user questions <br />
                    with high accuracy and zero hallucinations — strictly grounded in the<br />
                    provided lore context via semantic similarity search.
                </p>

                <div className='project-meta'>
                    <div className='meta-row'>
                        <div className='meta-item'>
                            <h4>Type</h4>
                            <p>Personal Project</p>
                        </div>
                        <div className='meta-item'>
                            <h4>Technologies</h4>
                            <p>· Python · ChromaDB · Hugging Face <br />
                                · SentenceTransformers · OpenAI API <br />
                                · GPT-4o · RAG</p>
                        </div>
                    </div>
                    <div className='meta-item'>
                        <a href='https://github.com/Arpan25AK/ChatBot' target='_blank' className='open-project'>
                            Open Project →
                        </a>
                    </div>
                </div>
            </div>

            {/* ── ReactFlow Logic Flow ── */}
            <h2 style={{ textAlign: 'center', color: 'white', marginTop: '50px' }}>Logic Flow</h2>

            <div style={{ width: '90%', height: '500px', margin: '20px auto', background: 'transparent', borderRadius: '12px' }}>
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

export default ChatBot