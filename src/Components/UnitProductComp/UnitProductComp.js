
import React from 'react'
import './unitProdStyles.css'

const UnitProductComp = (props) => {

   
   
    return (
        <div className="unitProd">
      
          <span className="productImage" >  
            <img alt="" src={props.props.image_urls.x200} height="110" width="110"></img> 
            <span>
                <p className="name">{props.props.name}</p>
                <span className="prices">
                    <p className="final_price">{`₹ ${props.props.final_price}`}</p>
                   
                    <p className="price">{`₹ ${props.props.price}`}</p>
                </span>
                {(props.props.is_in_stock && <button className="button1">ADD TO CART</button>) || <button className="button2">OUT OF STOCK</button>}
            </span>
            <p className="rating">{(props.props.rating && `${props.props.rating}★`)}</p>
         </span>

        <hr className="dashed"/>
        </div>
    )
}

export default UnitProductComp
