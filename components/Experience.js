import React, { useState } from 'react'
import items from '../data/experience.json'
import Icons from './Icons'

const Experience = () => {
  const [ filter, setFilter ] = useState([])

  const categories = [ 'languages', 'frameworks' ]
  const locations = [ 'frontend', 'backend', 'mobile' ]

  /**
   * Retrieves items
   */
  const getItems = () => {
    // Checks to see if first array contains all values from second array
    const containsAll = (array, search) => {
      let result = true
      search.forEach(val => {
        if (!array.includes(val)) {
          result = false
        }
      })

      return result
    }

    return items.map(val => {
      // 
      if (!filter.length || containsAll(val.filters, filter)) {
        return (<li key={ val.title }>{ val.title }</li>)
      }
    })
  }

  /**
   * Handles filtering items
   * @param {object} e 
   */
  const handleFilter = e => {
    const val = e.currentTarget.name
    if (e.currentTarget.checked) {
      setFilter([ ...filter, val ])
    } else {
      setFilter(filter.filter(str => str !== val))
    }
  }

  /**
   * Retrieves the Filter checkboxes
   */
  const getFilters = () => {
    // Retrieves JSX
    const getJSX = (val, disabled = false) => {
      return (
        <li key={ val } className={ disabled ? 'disabled' : '' }>
          <label>
            <input type='checkbox' name={ val } onChange={ handleFilter } disabled={ disabled ? true : false } />
            { val }
          </label>
        </li>
      )
    }

    // Ensures we're not overlapping categories
    const preparedCategories = categories.map(val => {
      const disabled = categories.some(category => filter.includes(category) && val !== category)
      return getJSX(val, disabled)
    })

    // Ensures we're not overlapping locations
    const preparedLocations = locations.map(val => {
      const disabled = locations.some(location => filter.includes(location) && val !== location)
      return getJSX(val, disabled)
    })

    return [ ...preparedCategories, ...preparedLocations ]
  }

  return (
    <div className='row alt' id='experience'>
      <h1 className='title'>Experience</h1>
      <Icons />
        <ul className='topics'>
          <li className='topic'>
            <h3>Languages</h3>
            <ul className='topic-list'>
              <li className='item'>Javascript</li>
              <li className='item'>PHP</li>
              <li className='item'>C#</li>
              <li className='item'>Java</li>
            </ul>
          </li>
          <li className='topic'>
            <h3>Frontend</h3>
            <ul className='topic-list'>
              <li className='item'>React</li>
              <li className='item'>Vue JS</li>
              <li className='item'>Sass</li>
            </ul>
          </li>
          <li className='topic'>
            <h3>Backend</h3>
            <ul className='topic-list'>
              <li className='item'>Node JS</li>
              <li className='item'>Next JS</li>
              <li className='item'>Laravel</li>
              <li className='item'>.NET</li>
            </ul>
          </li>
          <li className='topic'>
            <h3>Misc</h3>
            <ul className='topic-list'>
              <li className='item'>Electron</li>
              <li className='item'>React Native</li>
              <li>Sequelize JS</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
            </ul>
          </li>
        </ul>
        <p className='disclaimer'>...and more</p>
    </div>
  )
}

export default Experience
