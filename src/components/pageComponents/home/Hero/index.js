import classes from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.content}>
        <h1>Full Stack Development</h1>
        <div className={classes.iconContainer}>
          <a className={classes.link} href='https://github.com/heffayXD' target='_blank' rel='noopener noreferrer' title='Github'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className={classes.link} href='/downloads/Resume.pdf' target='_blank' rel='nofollow' title='Resume' download>
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
        </div>
      </div>
      <div className={classes.nav}>
        <h2>Navigation</h2>
        <a href='#projects'>Projects</a>
        <a href='#experience'>Experience</a>
        <a href='#contact'>Contact</a>
      </div>
      <div className={classes.background}>
        <div className={classes.firstBlock} />
        <div className={classes.secondBlock} />
        <div className={classes.imageContainer}>
          <div className={classes.overlay} />
        </div>
      </div>
    </div>
  )
}

export default Hero
