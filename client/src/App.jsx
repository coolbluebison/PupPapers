import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// importing components
import Landing from "./components/Landing"
import BirthdayPage from "./components/BirthdayPage"
import NamePage from "./components/NamePage"
import BreedPage from "./components/BreedPage"
import GenderPage from "./components/GenderPage"
import ParentPage from "./components/ParentPage"
import DownloadPage from "./components/DownloadPage"
import DisplayPage from "./components/DisplayPage"




function App() {
  const [count, setCount] = useState(0)

  const [birthdate, setBirthdate] = useState('')
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [gender, setGender] = useState('')
  const [parent, setParent] = useState('')
  // const [isPdfReady, setIsPdfReady] = useState(false);



  return (

    <Router>  
      <Routes>  
        
        <Route path="/" element= { <Landing /> } />
        <Route path="/birthday" element= { <BirthdayPage setBirthdate={setBirthdate} /> } />
        <Route path="/name" element= { <NamePage setName={setName} /> } />
        <Route path="/breed" element= { <BreedPage setBreed={setBreed}/> } />
        <Route path="/gender" element= { <GenderPage setGender={setGender}/> } />
        <Route path="/parent" element= { <ParentPage setParent={setParent} /> } />
        <Route path="/download" element= { <DownloadPage birthdate={birthdate} name={name} breed={breed} gender={gender} parent={parent} /> } />
        <Route path="/display" element= { <DisplayPage /> } />


      </Routes>
    </Router>
  
  )
}

export default App
