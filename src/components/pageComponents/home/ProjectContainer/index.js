import { useState, useRef } from 'react'
import Image from 'next/image'
import classes from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWindows, faAndroid, faNpm } from '@fortawesome/free-brands-svg-icons'

import { useScroll } from 'hooks/scroll'

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
      <li className={classes.techItem} key={`tech-item-${project.key}-${index}`}>
        {tech}
      </li>
    ))
  }

  const getIcon = icon => {
    switch (icon) {
      case 'github':
        return faGithub
      case 'windows':
        return faWindows
      case 'android':
        return faAndroid
      case 'npm':
        return faNpm
    }
  }

  const getLinks = () => {
    return project.links.map((link, index) => (
      <a
        key={`link-${project.key}-${index}`}
        className={classes.iconLink}
        href={link.url}
        target='_blank'
        rel='noopener noreferrer'
        title={link.title}
        download={link.download}
      >
        <FontAwesomeIcon icon={getIcon(link.icon)} />
      </a>
    ))
  }

  return (
    <div className={`${classes.projectContainer} ${props.reverse ? classes.reverse : ''}`}>
      <div className={classes.imageContainer}>
        <Image src={require(`../../../../../public/images/${project.image}`)} alt={project.imageAlt} />
      </div>
      <div className={`${classes.content} ${show ? '' : classes.hide}`} ref={refContainer}>
        <h2 className={classes.projectTitle}>{project.title}</h2>
        <p>{project.description}</p>
        <h3 className={classes.techsTitle}>Technologies</h3>
        <ul className={classes.icons}>
          {getTechs()}
        </ul>
        <div className={classes.iconContainer}>
          {getLinks()}
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
