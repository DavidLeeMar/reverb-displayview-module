import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import ReactTooltip from "react-tooltip";

var Seller = (props) => {


  return (
    <div className="sellercomponentdv">

      <div>
        <div className="sellerheaderdv">Shipped From</div>
        <a className="sellernamedv" href="https://reverb.com/shop/toneshopguitars">{props.state.product.sellername}</a>
        <div className="selleraddressdv">{props.state.product.city}, {props.state.product._state}, {props.state.product.country}</div>
        <div className="sellerreviewcountcontainerdv">
          <div className="sellerreviewcountdv">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={props.state.product.rating}
              emptyStarColor={"#FFF0DA"} />
          </div>
        <div className="numberopacitydv">(3,948)</div>
        </div>
        <div className='sellerstatsdv'>
          <div className="sellersalesstatsdv">
            <div>Sales</div>
            <div className="weight-bolddv">6000+</div>
          </div>
          <div>
            <div>Joined Reverb</div>
            <div className="weight-bolddv">{props.state.product.joinyear}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="nudgebadgedivdv">
          <div className="preferredsellerbadgedv"></div>
          <span className="badgetextdv" data-tip data-for="preferredtip">Preferred Seller</span>
          <ReactTooltip id="preferredtip" place="top" effect="solid">
          This seller provides outstanding service
          </ReactTooltip>
        </div>
        <div className="nudgebadgedivdv">
          <div className="quickresponderbadgedv"></div>
          <span className="badgetextdv" data-tip data-for="respondertip">Quick Responder</span>
          <ReactTooltip id="respondertip" place="top" effect="solid">
          This seller responds quickly to messages
          </ReactTooltip>
        </div>
        <div className="nudgebadgedivdv">
          <div className="quickshipperbadgedv"></div>
          <span className="badgetextdv" data-tip data-for="shippertip">Quick Shipper</span>
          <ReactTooltip id="shippertip" place="top" effect="solid">
          On average, this seller ships quickly
          </ReactTooltip>
        </div>
      </div>

      <div>
        <div className="sellerbuttonscontainerdv">
          <div className="sellerbuttondivdv">
            <a className="sellerbuttonsdv" href=""  data-registration="required"   data-send-message="true">Message Seller</a>
          </div>
          <div className="sellerbuttondivdv">
            <button className="sellerbuttonsdv" type="button">Payment &amp; Returns</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Seller