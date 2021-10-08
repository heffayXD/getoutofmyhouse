const LoadingBar = props => {
  const getProgress = () => {
    const chars = []
    const percent = Math.floor((props.val / props.max) * 10)

    for (let i = 0; i < 10; i++) {
      chars.push(i < percent ? '#' : '-')
    }

    return chars.join('')
  }
  return (
    <span className='loading-bar'>[{getProgress()}]</span>
  )
}

export default LoadingBar
