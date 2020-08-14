import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

var Seller = () => {

  return (
    <div className="sellercomponentdv">

      <div>
        <div className="sellerheaderdv">Shipped From</div>
        <a className="sellernamedv" href="https://reverb.com/shop/toneshopguitars">Tone Shop Guitars</a>
        <div className="selleraddressdv">Addison, TX, United States</div>
        <div className="sellerreviewcountcontainerdv">
          <div className="sellerreviewcountdv"><StarRatingComponent   name="rate1" starCount={5} value={5} emptyStarColor={"#FFF0DA"} /></div>
          <div className="numberopacitydv">(3,948)</div>
        </div>
        <div className='sellerstatsdv'>
          <div className="sellersalesstatsdv">
            <div>Sales</div>
            <div className="weight-bolddv">6000+</div>
          </div>
          <div>
            <div>Joined Reverb</div>
            <div className="weight-bolddv">2015</div>
          </div>
        </div>
      </div>

      <div>
        <div className="nudgebadgedivdv">
          <div className="preferredsellerbadgedv"></div>
          <span className="badgetextdv">Preferred Seller</span>
        </div>
        <div className="nudgebadgedivdv">
          <div className="quickresponderbadgedv"></div>
          <span className="badgetextdv">Quick Responder</span>
        </div>
        <div className="nudgebadgedivdv">
          <div className="quickshipperbadgedv"></div>
          <span className="badgetextdv">Quick Shipper</span>
        </div>
      </div>

      <div>
        <div className="sellerbuttonscontainerdv">
          <div className="sellerbuttondivdv">
            <a className="sellerbuttonsdv" href="/my/messages/new?item=34806774&amp;  recipient_uuid=5548a01b-aee9-49b3-9ca7-dac91a8741f7"   data-registration="required"   data-send-message="true">Message Seller</a>
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