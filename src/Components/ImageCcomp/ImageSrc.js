import React from 'react'
import './imageStyles.css'

const ImageSrc = (img) => {
   
    return (
        <div className="image">
            <img src={img.img} alt="" height="85" className="whatever">
                
            </img>
        </div>
    ) 
}

export default ImageSrc
