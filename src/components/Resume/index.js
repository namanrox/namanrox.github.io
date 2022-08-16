import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import resumeData from '../../data/resume.json'

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [resume] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  console.log(resume)

  const renderResume = (resume) => {
    return (
      <div className="images-container">
        {resume.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={port.cover} className="resume-image" alt="resume" />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container resume-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Resume'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderResume(resumeData.resume)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Resume
