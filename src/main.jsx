import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CeoDeck from './CeoDeck.jsx'
import './index.css'

// Lightweight path routing (no router dependency):
//   /       → CEO presentation (default)
//   /ceo    → CEO presentation (alias, keeps old links working)
//   /full   → the full 13-section site / dashboard
const path = window.location.pathname.replace(/\/+$/, '')
const isFull = path === '/full'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{isFull ? <App /> : <CeoDeck />}</React.StrictMode>,
)
