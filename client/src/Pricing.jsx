import React from 'react';

var Pricing = (props) => {

  return (
    <div className="pricedisplaycomponentdv">
      <span className="price-displaydv">${props.state.product.price}</span>
      <div className="shippingpricedv"> +${props.state.product.shippingcost} Shipping</div>
      <button type="submit" className="addtocartbuttondv">Add to Cart</button>
      <button title="Watch" className="watchbuttondv" onClick={props.handleSignUpModalToggle}>
      <div className="pricewatchdivdv"><i className="far fa-star"></i><span>Watch</span></div></button>
      <div className="dropalertsdivdv"><img className="dropalertpngdv" src="./dropalerts.png"></img></div>
    </div>
  )
}

export default Pricing