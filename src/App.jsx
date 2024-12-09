import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SpellList from '../component/SpellList'
import CharacterList from '../component/CharacterList'
import ContactForm from '../component/ContactForm'
import CharacterGreeting from '../component/CharacterGreeting'
import SpellGreeting from '../component/SpellGreeting'
import Navbar from '../component/Navbar';


function App() {

  return (
    <>
    <Navbar/>
    <CharacterGreeting/>
    <CharacterList/>
    <SpellGreeting/>
    <SpellList/>
    <ContactForm/>

    </>
  )
}

export default App
