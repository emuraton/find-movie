import React from 'react'
import iconImg from './images/icon-header.png'

require('./Header.css')

export default () => {
  return (
    <header className="Header">
      <div className="Header-content">
        <img alt="icon-movie-db" src={iconImg} />
        <span className="Header-content-span">Find your movie</span>
      </div>
    </header>
  )
}
