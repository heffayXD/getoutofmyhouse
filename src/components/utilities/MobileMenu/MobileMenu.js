import { useState } from 'react'
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
    <nav className='mobile-menu'>
      <button onClick={handleClick} aria-label='Menu Toggle' className='menu-toggle'>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`backdrop ${show ? 'show' : ''}`} onClick={handleClick}>
        <button onClick={handleClick} className='close-button'>&times;</button>
        <ul className='menu-list'>
          <li className='menu-item'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='menu-item'>
            <a href='#experience'>Experience</a>
          </li>
          <li className='menu-item'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MobileMenu
