import CommandPrompt from './CommandPrompt'

const Terminal = props => {
  return (
    <div className='row alt' id='terminal'>
      <h1 className='title'>Terminal</h1>
      <CommandPrompt />
    </div>
  )
}

export default Terminal
