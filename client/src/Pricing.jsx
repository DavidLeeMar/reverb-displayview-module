import React from 'react';

var Pricing = () => {

  return (
    <div>
      <span className="price-display">$349.99</span>
      <div className="price-with-shipping__shipping">Free Shipping</div>
      <button type="submit" className="add-to-cart-button">Add to Cart</button>
      <button title="Watch"><div><span>Watch</span></div></button>
    </div>
  )
}

export default Pricing