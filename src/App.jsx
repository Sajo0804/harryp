import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiCall from '../component/ApiCall'
import CharacterList from '../component/CharacterList'

function App() {

  return (
    <>
    <ApiCall/>
    <CharacterList/>

    </>
  )
}

export default App
