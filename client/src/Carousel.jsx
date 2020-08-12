import React from 'react';
import CarouselImage from './CarouselImage.jsx'

var Carousel = (props) => {

  return(
    <div>
      <div className="mainimagedivdv">
        <button className="image_prevdv" onClick={props.getPrevImage} aria-label="Previous Image"></button>
        <img className="mainimagedv" src={props.state.current_image} />
        <button className="image_nextdv" onClick={props.getNextImage} aria-label="Next Image"></button>
      </div>
      <div className="carousel_bardv">
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
  )

}

export default Carousel