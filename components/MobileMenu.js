import { useState } from 'react'

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
      <button onClick={handleClick} name='menu' className='menu-toggle'>
        <i className='fas fa-bars' />
      </button>
      <div className={`backdrop ${show ? 'show' : ''}`} onClick={handleClick}>
        <button onClick={handleClick} className='close-button'>&times;</button>
        <ul className='menu-list'>
          <li className='menu-item'>
            <a href='#experience'>Experience</a>
          </li>
          <li className='menu-item'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='menu-item'>
            <a href='#terminal'>Terminal</a>
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
