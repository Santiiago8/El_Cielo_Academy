import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles/reset.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    })
  },[])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
