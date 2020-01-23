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

  const openGithub = (link, currentIndex) => {
    const win = window.open(link, '_blank')
    win.focus()

    return parseRows([
      'Opening github...'
    ], currentIndex)
  }

  return (command, currentIndex) => {
    switch (command) {
      case 'help':
        return parseRows([
          '-- COMMANDS --',
          '',
          'cls | - | Clears the screen',
          'help | - | Displays available commands',
          'projects | - | Returns list of Project IDs',
          'github | - | Opens github (use "[project_id] github" to specify project)'
        ], currentIndex)
      case 'github':
        return openGithub('https://github.com/heffayXD', currentIndex)
      case 'projects':
        return parseRows([
          '-- PROJECTS --',
          '',
          'reencrypt | - | Password manager that encrypts and stores files locally',
          'trackpad_s | - | TrackPad Server for connecting to the TrackPad Mobile App',
          'trackpad_m | - | TrackPad Mobile App for connecting to the TrackPad Server and controlling the mouse',
          'picture_crop | - | React component for cropping profile pictures client side',
          '',
          'Use "[project_id] github" to link to github.'
        ], currentIndex)
      case 'reencrypt github':
        return openGithub('https://github.com/heffayXD/reencrypt', currentIndex)
      case 'trackpad_s github':
        return openGithub('https://github.com/heffayXD/trackpad-server', currentIndex)
      case 'trackpad_m github':
        return openGithub('https://github.com/heffayXD/trackpad-mobile', currentIndex)
      case 'picture_crop github':
        return openGithub('https://github.com/heffayXD/react-picture-crop', currentIndex)
      default:
        return parseRows([
          `"${command}" not recognized.`,
          'Use "help" command for available commands.'
        ], currentIndex)
    }
  }
}
