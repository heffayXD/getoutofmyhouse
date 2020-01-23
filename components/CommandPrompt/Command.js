import { useState } from 'react'

const Command = props => {
  const [prevCommands, setPrevCommands] = useState([])
  const [index, setIndex] = useState(-1)

  const handleKeyDown = e => {
    if (e.keyCode === 13) { // Enter
      enterEvent()
    } else if (e.keyCode === 38 && prevCommands.length > index + 1) { // Up arrow
      upEvent()
    } else if (e.keyCode === 40 && index !== -1) { // Down arrow
      downEvent()
    }

    // Forces the focus to end of the input for backspacing
    const temp = e.target.value
    e.target.value = ''
    e.target.value = temp
  }

  const enterEvent = () => {
    setPrevCommands([props.command, ...prevCommands])
    props.handleCommand()
    props.setCommand('')
  }

  const upEvent = () => {
    const newIndex = index + 1
    setIndex(newIndex)
    props.setCommand(prevCommands[newIndex])
  }

  const downEvent = () => {
    if (index - 1 === -1) {
      // If the new index is 0, then make command blank
      setIndex(-1)
      props.setCommand('')
    } else {
      // Otherwise, command is just the previous index
      const newIndex = index - 1
      setIndex(newIndex)
      props.setCommand(prevCommands[newIndex])
    }
  }

  return (
    <p id='command-section' className={props.init ? 'hidden' : 'fade-in'}>
      $&nbsp;
      <input
        id='command-input'
        name='command'
        aria-label='Command'
        onChange={props.handleChange}
        onKeyDown={handleKeyDown}
        value={props.command}
      />
      {props.command}
    </p>
  )
}

export default Command
