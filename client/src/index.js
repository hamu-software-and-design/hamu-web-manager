import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.scss'

import MainNavbar from './components/MainNavbar.js'

ReactDOM.render(
  <div className="bg-inverse h-vh100">
    <MainNavbar />
  </div>,
  document.getElementById('app'))
