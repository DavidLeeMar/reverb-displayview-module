import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

var Findmore = () => {

  return (
    <div className="findmorecomponentdv">
      <h3 className="findmoretitledv">Find More on Reverb</h3>

      <div className="findmoreproductdv">

        <img className="findmoreimagedv" src="https://images.reverb.com/image/upload/s--rz5ClWDv--/t_card-square/v1591382671/eynovcjrjsddmvskgdya.jpg" />
        <div>
          <h3>Squier Paranormal Super-Sonic</h3>
          <StarRatingComponent name="rate1" starCount={5} value={5} />
          <div>(2)</div>
        </div>

      </div>






        <a className="csp-pg-card__price-link" href="https://reverb.com/p/squier-paranormal-super-sonic/new">59 new from $349.99</a>
        <a className="csp-pg-card__price-link" href="https://reverb.com/p/squier-paranormal-super-sonic/  used">3 used from $299.99</a>




    </div>
  )
}
export default Findmore