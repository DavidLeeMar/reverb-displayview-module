import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

var Findmore = () => {

  return (
    <div className="findmorecomponentdv">
      <h3 className="findmoretitledv">Find More on Reverb</h3>

      <div className="findmorecontainerdiv">
        <div className="findmoreimagedivdv">
          <img className="findmoreimagedv" src="https://images.reverb.com/image/upload/s--2v8soTt2--/f_auto,t_large/v1597242733/u8q7dxguafrlyinnaboo.jpg" />
        </div>
        <div>
          <div>
            <h3 className="findmorenamedv">Squier Paranormal Super-Sonic</h3>
          </div>
          <div className="sellerreviewcountdv"><StarRatingComponent name="rate1" starCount={5} value={5} emptyStarColor={"#FFF0DA"} />(3,948)
          </div>
        </div>
      </div>
      <div className="findmorelinksdivdv">
        <a className="findmorelinksdv" href="https://reverb.com/p/squier-paranormal-super-sonic/new">59 new from $349.99</a>
        <a className="findmorelinksdv" href="https://reverb.com/p/squier-paranormal-super-sonic/  used">3 used from $299.99</a>
      </div>


    </div>
  )
}
export default Findmore