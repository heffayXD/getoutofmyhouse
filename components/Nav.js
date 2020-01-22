import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/documentation'>
            <a>Documentation</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
