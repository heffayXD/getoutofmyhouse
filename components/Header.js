import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <Link href='/'>
        <a className='title'>GetOutOfMyHouse</a>
      </Link>
    </header>
  )
}

export default Header
