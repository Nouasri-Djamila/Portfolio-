import './app.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import React from 'react'
import Parallex from './components/Parallex/Parallex'
import Services from './components/servises/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/contact/Contact'
const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='Services'><Parallex type="services"/></section>
      <section ><Services/></section>
      <section id='Protfolio'><Parallex type="portfolio"/></section>
      <Portfolio/>
      <section id='Contact'><Contact/></section>
    </div>
  )
}

export default App