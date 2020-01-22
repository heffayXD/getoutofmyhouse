export const useCommands = () => {
  const parseRows = (strings, currentIndex) => {
    return strings.map((string, index) => {
      const keyIndex = index + currentIndex + 1
      return (
        <tr key={`t-${keyIndex}`}>
          {string.split('|').map((child, childIndex, arr) => {
            if (arr.length === 3) {
              return (<td key={`child-${keyIndex}-${childIndex}`}>{child}</td>)
            } else if (!child) {
              return (<td key={`child-${keyIndex}-${childIndex}`} colSpan='3'>&nbsp;</td>)
            } else {
              return (<td key={`child-${keyIndex}-${childIndex}`} colSpan='3'>{child}</td>)
            }
          })}
        </tr>
      )
    })
  }

  return (command, currentIndex) => {
    switch (command) {
      case 'commands':
        return parseRows([
          '-- COMMANDS --',
          '',
          'cls | - | Clears the screen',
          'commands | - | Displays available commands',
          'github | - | Opens github',
          'projects | - | Returns list of Project IDs'
        ], currentIndex)
      case 'github': {
        const win = window.open('https://github.com/heffayXD', '_blank')
        win.focus()

        return [
          'Opening github...'
        ]
      }
      case 'projects':
        return parseRows([
          '-- PROJECTS --',
          '',
          'jeffbot | - | Discord Bot using Node JS',
          'picture_crop | - | React component for cropping profile pictures client side',
          '',
          'Use "[project_id] github" to link to github.'
        ], currentIndex)
      default:
        return parseRows([
          'Command not recognized.',
          'Use "commands" command for more info.'
        ], currentIndex)
    }
  }
}
