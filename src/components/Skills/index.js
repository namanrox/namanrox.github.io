import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&']}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>
          <p align="justify">
            Expert in{' '}
            <a href="/" alt="C++">
              C++
            </a>{' '}
            programming along with front-end development including technologies
            like{' '}
            <a href="https://www.w3schools.com/html/" alt="HTML5">
              HTML5
            </a>
            ,{' '}
            <a href="https://www.w3schools.com/css/" alt="CSS3">
              CSS3
            </a>
            ,{' '}
            <a href="https://www.javascript.com/" alt="JavaScript">
              JavaScript
            </a>
            ,{' '}
            <a href="https://reactjs.org/" alt="React">
              React
            </a>
            ,{' '}
            <a href="https://getbootstrap.com/" alt="BootStrap">
              BootStrap
            </a>
            ,{' '}
            <a href="https://v4.mui.com/" alt="MaterialUI">
              MaterialUI
            </a>
            ,{' '}
            <a href="https://git-scm.com/" alt="Git">
              Git
            </a>
            . Knows{' '}
            <a href="https://www.mysql.com/" alt="MySQL">
              MySQL
            </a>{' '}
            and{' '}
            <a href="https://firebase.google.com/" alt="Firebase">
              Firebase
            </a>{' '}
            for saving data in the database.
          </p>
          <p align="justify">
            Visit my{' '}
            <a href="https://www.linkedin.com/in/naman991/" alt="LinkedIn">
              LinkedIn
            </a>{' '}
            profile for more details. Also, check out my resume and feel free to
            peek some of my{' '}
            <a href="https://androidtechnn.blogspot.com/" alt="Blog">
              blog posts
            </a>
            .
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
