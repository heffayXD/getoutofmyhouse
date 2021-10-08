import { useState } from 'react'
import classes from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    if (!show) {
      document.querySelector('body').classList.add('no-scroll')
    } else {
      document.querySelector('body').classList.remove('no-scroll')
    }

    setShow(!show)
  }

  return (
    <nav className={classes.mobileMenu}>
      <button onClick={handleClick} aria-label='Menu Toggle' className={classes.toggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`${classes.backdrop} ${show ? classes.show : ''}`} onClick={handleClick}>
        <button onClick={handleClick} className={classes.close}>&times;</button>
        <ul className={classes.list}>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MobileMenu
