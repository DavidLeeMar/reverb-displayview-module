import React from 'react';

var Pricing = (props) => {

  return (
    <div className="pricedisplaycomponentdv">
      <span className="price-displaydv">$349.99</span>
      <div className="shippingpricedv">Free Shipping</div>
      <button type="submit" className="addtocartbuttondv">Add to Cart</button>
      <button title="Watch" className="watchbuttondv" onClick={props.handleSignUpModalToggle}>
      <div className="pricewatchdivdv"><i class="far fa-star"></i><span>Watch</span></div></button>
      <div className="dropalertsdivdv"><img className="dropalertpngdv" src="./dropalerts.png"></img></div>
    </div>
  )
}

export default Pricing