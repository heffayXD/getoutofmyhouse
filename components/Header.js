import Link from 'next/link'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header>
      <Link href='/'>
        <a className='title'>GetOutOfMyHouse</a>
      </Link>
      <MobileMenu />
    </header>
  )
}

export default Header
