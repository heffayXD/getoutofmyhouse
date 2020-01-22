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
          'projects | - | Returns list of Project IDs',
          'github | - | Opens github (use "github [project_id]" to specify project)',
          'techs | - | Returns list of techs (use "techs [project_id]" to specify project)'
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
      case 'techs':
        return parseRows([
          '-- TECHS --',
          '',
          'Express | - | Javascript server backend framework',
          'PostgreSQL | - | Database language',
          'Sequelize JS | - | Javascript ORM',
          'GraphQL | - | API interface language',
          'Electron | - | Javascript desktop application framework',
          'React Native | - | Javascript mobile application framework',
          'React JS | - | Client side frontend framework',
          'Vue JS | - | Client side frontend framework',
          'Laravel | - | PHP server backend framework'
        ], currentIndex)
      default:
        return parseRows([
          'Command not recognized.',
          'Use "commands" command for more info.'
        ], currentIndex)
    }
  }
}
