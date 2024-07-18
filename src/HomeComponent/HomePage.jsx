import React from 'react'
import '../App.css'
import HP from '../images/home.avif'

const HomePage = () => {

  return (
    <div className='HomePage'>
      <img src={HP} alt="" className='HomePage-image'/>
      <div className='HomePage-textbox'>
        <strong>Featured</strong>
        <a href='#!'>Men's Products</a>
        <a href='#!'>Women's Products</a>
        <a href='#!'>New Arrivals</a>
      </div>
      <div className='HomePage-button'>
        <div className='HomePage-button-text'>
          <span>Breathable By Nature<br/>
          <span className='Hometext-st'>Airy, light, rooted in comfort. Explore the Tree Collection.</span>
          </span>
        </div>
        <div className='HomePage-button-button'>
           <button>
              Shop for MEN
          </button>
          <button>
              Shop for WOMEN
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
