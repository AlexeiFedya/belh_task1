import React from 'react'
import {Link} from 'react-router-dom'

import icon from './logo1.svg'
import icon1 from './call-center.svg'

import './header-layout.css'

const HeaderLayout = () => {
    return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to='/'>
            <img src={icon} alt="logo"/>
        </Link>
        {/* <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link nav-text" to='/soon'>Преимущества</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to='/soon'>Отзывы</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to='/soon'>Консультация</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to='/soon'>Кейсы</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to='/soon'>Контакты</Link>
            </li>
          </ul>

          <div className='float-right'>
            <Link className="nav-link" to='/soon'>
              <img src={icon1} alt="logo"/>
            </Link>
          </div>
        </div>
      </nav>
    </div>
        
        
    )
}

export default HeaderLayout;