import React, { useState } from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
export default function Navbar(props) {
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/*<a className="nav-link" href="/about">About</a>*/}
        </li>
        </ul>
      {/*
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      <form>
      */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" onChange={props.toggleMode} role="switch" id="flexSwitchCheckDefault  switch2" onClick={props.toggleModeChangeSwitch2} style={{backgroundColor:'#405d27', marginRight: '5vw'}} />
          <input className="form-check-input" type="checkbox" onChange={props.toggleMode} role="switch" onClick={props.toggleModeChange} id="flexSwitchCheckDefault switch1" style={{backgroundColor:'#c1946a', marginRight: '5vw'}} />
          <input className="form-check-input" type="checkbox" onChange={props.toggleMode} role="switch" id="flexSwitchCheckDefault  switch3" onClick={props.toggleModeChangeSwitch3} style={{backgroundColor:'black'}} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Insert Title Here'
}
//
//