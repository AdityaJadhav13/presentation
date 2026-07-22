import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CeoDeck from './CeoDeck.jsx'
import './index.css'

// Lightweight path routing (no router dependency):
//   /ceo  → condensed 6-slide leadership deck (additive, parallel build)
//   /     → the full 13-section site (unchanged)
const isCeo = window.location.pathname.replace(/\/+$/, '') === '/ceo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{isCeo ? <CeoDeck /> : <App />}</React.StrictMode>,
)
