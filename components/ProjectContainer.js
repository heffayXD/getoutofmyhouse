import { useState, useRef } from 'react'

import { useScroll } from '../hooks/scroll'

const ProjectContainer = props => {
  const [show, setShow] = useState(false)
  const refContainer = useRef(null)
  const { project } = props

  useScroll(() => {
    if (refContainer.current.getBoundingClientRect().top < (window.innerHeight - 100)) {
      setShow(true)
    }
  })

  const getTechs = () => {
    return project.technologies.map((tech, index) => (
      <li
        className='tech-item'
        key={`tech-item-${project.key}-${index}`}
      >
        {tech}
      </li>
    ))
  }

  const getLinks = () => {
    return project.links.map((link, index) => (
      <a
        key={`link-${project.key}-${index}`}
        className='icon-link'
        href={link.url}
        target='_blank'
        rel='noopener noreferrer'
        title={link.title}
        download={link.download}
      >
        <i className={link.icon} />
      </a>
    ))
  }

  return (
    <div className={`project-container ${props.reverse ? 'reverse' : ''}`}>
      <div className='image-container'>
        <img className='' src={project.image} alt={project.imageAlt} />
      </div>
      <div className={`project-content ${show ? '' : 'hide'}`} ref={refContainer}>
        <h2 className='project-title'>{project.title}</h2>
        <p>{project.description}</p>
        <h3 className='techs-title'>Technologies</h3>
        <ul className='techs'>
          {getTechs()}
        </ul>
        <div className='icon-container'>
          {getLinks()}
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
