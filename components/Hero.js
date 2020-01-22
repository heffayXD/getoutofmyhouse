import CodeBlock from './CodeBlock'

const Hero = () => {
  return (
    <div id='hero'>
      <div className='hero-content'>
        <h1>Full Stack Development</h1>
        <div className='icon-container'>
          <a className='icon-link' href='https://github.com/heffayXD' target='_blank' rel='nofollow'>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className='hero-background'>
        <div className='block-1'></div>
        <div className='block-2'></div>
        <CodeBlock />
      </div>
    </div>
  )
}

export default Hero
