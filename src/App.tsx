import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

const App = () => <div>Hi there, I am React from federated Webpack 5.</div>

const container = document.getElementById('app')
if (container) {
  const root = createRoot(container)
  root.render(<App />)
}
