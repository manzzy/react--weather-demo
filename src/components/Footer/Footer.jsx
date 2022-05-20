import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className="container foot">
        <p className='footer-text'>&copy; {new Date().getFullYear()}, made with ♥</p>
    </div>
  )
}

export default Footer