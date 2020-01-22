import CodeBlock from './CodeBlock'

const Hero = () => {
  return (
    <div id='hero'>
      <div className='hero-content'>
        <h1>Full Stack Development</h1>
        <div className='icon-container alt'>
          <a className='icon-link' href='https://github.com/heffayXD' target='_blank' rel='noopener noreferrer' title='Github'>
            <i className='fab fa-github' />
          </a>
          <a className='icon-link' href='#' target='_blank' rel='nofollow' title='Resume'>
            <i className='fas fa-file-pdf' />
          </a>
        </div>
      </div>
      <div className='hero-background'>
        <div className='block-1' />
        <div className='block-2' />
        <CodeBlock />
      </div>
    </div>
  )
}

export default Hero
