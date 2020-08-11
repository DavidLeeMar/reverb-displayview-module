import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

var Findmore = () => {

  return (
    <div>
      <h3 className="item2__sidebar-module__header">Find More on Reverb</h3>


      <img src="https://images.reverb.com/image/upload/s--rz5ClWDv--/t_card-square/v1591382671/eynovcjrjsddmvskgdya.jpg" />

      <a className="color-gray" href="https://reverb.com/p/squier-paranormal-super-sonic">Squier Paranormal Super-Sonic</a>

      <StarRatingComponent name="rate1" starCount={5} value={5} />
      <div>(2)</div>

      <div>
        <a className="csp-pg-card__price-link" href="https://reverb.com/p/squier-paranormal-super-sonic/new">59 new from $349.99</a>
        <a className="csp-pg-card__price-link" href="https://reverb.com/p/squier-paranormal-super-sonic/  used">3 used from $299.99</a>
      </div>



    </div>
  )
}
export default Findmore