import React from 'react'
import './imageStyles.css'

const ImageSrc = (img) => {
    console.log(img.img);
    return (
        <div class="image">
            <img src={img.img}>
                
            </img>
        </div>
    )
}

export default ImageSrc
