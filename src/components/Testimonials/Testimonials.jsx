import React from 'react'
import SlickSlider from './SlickSlider'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className="t-wrapper" style={{ backgroundColor: 'black' }}>
        <div className="container">
            <div className="t-container">
                <div className="t-head">
                    <span className='tag'>Testimonials</span>
                    <span className='title'>Voices of Success, Powered by 9Dots</span>
                    <span className='des'>What people say about us</span>
                </div>
            </div>
            {/* slider */}
            <SlickSlider/>
        </div>
    </div>
  )
}

export default Testimonials