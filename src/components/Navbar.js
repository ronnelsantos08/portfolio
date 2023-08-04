import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <div>
      <div className='navbar__blur'></div>
        <div className='navbar__wrapper'>
      <h1>ProDev<span className='blinker'>_</span> </h1>
      <a href="https://www.facebook.com/ronnel.santos08/" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-xl"></i></a>
      <a href="https://www.facebook.com/ronnel.santos08/"target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-xl"></i></a>
      <a href="http://m.me/ronnel.santos08" target="_blank" rel="noreferrer"><i className="fab fa-facebook-messenger fa-xl"></i></a>
      <a href="https://www.linkedin.com/in/ronnel-santos-16aba8280/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-xl"></i></a>
</div>
      
    </div>
  )
}

export default Navbar
