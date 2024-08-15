import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer';



export const App = () => {
  return (
    <Router>
        <div>
            <NavBar />
            <AppRouter />
            <Footer />
        </div>
    </Router>
  )
}
