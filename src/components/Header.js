import React, { useState } from 'react'
import { Link } from 'react-scroll';

function Header() {
  const [btnHover, setBtnHover] = useState('btn1')
  const [btnHover1, setBtnHover1] = useState('btn1')
  const [btnHover2, setBtnHover2] = useState('btn1')
  const [btnHover3, setBtnHover3] = useState('btn1')


  const handleClick = () => {
    setBtnHover ("hovered")
    setBtnHover2 ("btn1")
    setBtnHover3 ("btn1")
    setBtnHover1 ("btn1")
  }
  const handleClick1 = () => {
    setBtnHover1 ("hovered")
    setBtnHover ("btn1")
    setBtnHover2 ("btn1")
    setBtnHover3 ("btn1")
  }
  const handleClick2 = () => {
    setBtnHover2 ("hovered")
    setBtnHover ("btn1")
    setBtnHover3 ("btn1")
    setBtnHover1 ("btn1")
  }
  const handleClick3 = () => {
    setBtnHover3 ("hovered")
    setBtnHover ("btn1")
    setBtnHover1 ("btn1")
    setBtnHover2 ("btn1")
  }
  return (
    <header>
        <div className='header__container'>
            <div className='header__wrapper'>
            <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} className="link"> <button className={btnHover} onClick={handleClick} >Intro</button></Link>
            <Link to="about__us" spy={true} smooth={true} offset={-50} duration={500} className="link"><button className={btnHover1} onClick={handleClick1} >About</button></Link>
            <Link to="exp" spy={true} smooth={true} offset={-50} duration={500} className="link"> <button className={btnHover2} onClick={handleClick2} >Exp.</button></Link>
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="link"><button className={btnHover3} onClick={handleClick3} >Projects</button></Link>
        </div>
        </div>
    </header>
  )
}

export default Header
