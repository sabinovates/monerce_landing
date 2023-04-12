import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='header-logo'>
            <img className='desktop' src='assets/images/header-logo.png' alt='monerce'/>
            <img className='mobile' src='assets/images/logo.svg' alt='monerce'/>
        </div>
        <div className="contact-whatsapp">
            <span>Can't Wait? Chat with us!</span>
            <img src="assets/images/whatsapp.png" alt='whatsapp' />
        </div>
    </header>
  )
}

export default Header