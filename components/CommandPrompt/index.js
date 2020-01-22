import { useState, useEffect } from 'react'
import LoadingBar from './LoadingBar'
import { useCommands } from '../../hooks/command-prompt'
import Command from './Command'

const CommandPrompt = () => {
  const getCommand = useCommands()
  const [init, setInit] = useState(true)
  const [currentInit, setCurrentInit] = useState(0)
  const [command, setCommand] = useState('')
  const [text, setText] = useState([
    (<tr key={1}><th colSpan='3'>-- COMMANDS --</th></tr>),
    (<tr key={2}><td colSpan='3'>&nbsp;</td></tr>),
    (<tr key={3}><td>cls&nbsp;</td><td> - </td><td>Clears the screen</td></tr>),
    (<tr key={4}><td>commands&nbsp;</td><td> - </td><td>Displays available commands</td></tr>),
    (<tr key={5}><td>github&nbsp;</td><td> - </td><td>Opens github</td></tr>),
    (<tr key={6}><td>projects&nbsp;</td><td> - </td><td>Returns list of Project IDs</td></tr>),
  ])

  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        if (i === 11) {
          setInit(false)
        } else {
          setCurrentInit(i)
        }
      }, (50 * i) + 1500)
    }
  }, [])

  const handleChange = e => {
    setCommand(e.target.value.toLowerCase())
  }

  const handleClick = e => {
    setTimeout(() => { document.querySelector('#command-input').focus() }, 0)
  }

  const handleCommand = () => {
    if (command === 'cls') {
      setText([ (<tr key={'screen-cleared'}><td colSpan='3'>Screen cleared.</td></tr>) ])
    } else {
      const result = getCommand(command, text.length)
      setText([...text, (<tr key={`spacer-${text.length}`}><td colSpan='3'>&nbsp;</td></tr>), ...result])
    }

    setCommand('')
  }

  return (
    <div id='command-prompt' onClick={handleClick}>
      <p className={init ? 'fade-in' : 'hidden'} id='init-loading'>Loading... <LoadingBar val={currentInit} max={10} /></p>
      <table className={init ? 'hidden' : 'fade-in'} id='command-content'>
        <tbody>
          {text}
        </tbody>
      </table>
      <p>&nbsp;</p>
      <Command command={command} handleChange={handleChange} handleCommand={handleCommand} setCommand={setCommand} init={init} />
    </div>
  )
}

export default CommandPrompt