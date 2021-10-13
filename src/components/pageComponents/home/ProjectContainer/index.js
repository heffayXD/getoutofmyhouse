import { useState, useRef } from 'react'
import Image from 'next/image'
import classes from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWindows, faAndroid, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { useScroll } from 'hooks/scroll'

const ProjectContainer = ({ project, reverse = false }) => {
  const [show, setShow] = useState(false)
  const refContainer = useRef(null)

  useScroll(() => {
    const top = refContainer.current.getBoundingClientRect().top
    if (top < (window.innerHeight - 100)) {
      setShow(true)
    }
  })

  const getIcon = icon => {
    switch (icon) {
      case 'github':
        return faGithub
      case 'website':
        return faExternalLinkAlt
      case 'windows':
        return faWindows
      case 'android':
        return faAndroid
      case 'npm':
        return faNpm
    }
  }

  return (
    <div className={`${classes.projectContainer} ${reverse ? classes.reverse : ''}`}>
      <div className={`${classes.content} ${show ? '' : classes.hide}`} ref={refContainer}>
        <h2 className={classes.projectTitle}>{project.title}</h2>
        <p>{project.description}</p>
        <h3 className={classes.techsTitle}>Technologies</h3>
        <p>{project.technologies.join(', ')}</p>
        <div className={classes.iconContainer}>
          {project.links.map((link, index) => (
            <a
              href={link.url}
              target='_blank'
              title={link.title}
              download={link.download}
              rel='noopener noreferrer'
              className={classes.iconLink}
              key={`link-${project.key}-${index}`}
            >
              <FontAwesomeIcon icon={getIcon(link.icon)} />
            </a>
          ))}
        </div>
      </div>
      <div className={classes.imageContainer}>
        <Image src={require(`../../../../../public/images/${project.image}`)} alt={project.imageAlt} />
      </div>
    </div>
  )
}

export default ProjectContainer
