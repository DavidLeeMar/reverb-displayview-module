import React from 'react';
import CarouselImage from './CarouselImage.jsx';

var ImageModal = (props) => {

  return (
    <div id="myImageModal" className={props.state.showImageModal ? 'openedModal' : 'closedModal'}>

      {/*<!-- Modal content -->*/}
      <div className="image-modal-content">
        <span className="image-close" onClick={props.handleImageModalToggle}>&times;</span>
        <div>
          <div className="image-modal-div-dv">
            <img className="mainimagedv" src={props.state.current_image} />
          </div>
          <div className="image-modal-carousel_bardv">
          {props.state.images.map((item, index) => {
            return <CarouselImage
                     image={item}
                     index={index}
                     key={index}
                     current_index={props.state.current_index}
                     handleImageBarClick={props.handleImageBarClick}/>
          })}
        </div>
        </div>

      </div>

    </div>
  )

}





export default ImageModal