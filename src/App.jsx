// import { useState } from 'react'
import './styles/App.css'
import ContactInfo from './components/ContactInfo'
import EducationInfo from './components/EducationInfo'
import WorkExperience from './components/ExperienceInfo'

function App() {

  return (
    <>
      <div className="main-container">
        <ContactInfo />
        <EducationInfo />
        <WorkExperience />
      </div>
    </>
  )
}

export default App
