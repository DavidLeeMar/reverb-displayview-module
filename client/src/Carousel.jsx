import React from 'react';
import CarouselImage from './CarouselImage.jsx'

var Carousel = (props) => {

  return(
    <div>
      <div className="mainimage">
        <img src={props.state.current_image} />
        <div><button className="image_prev" onClick={props.getPrevImage} aria-label="Previous Image"></button><button className="image_next" onClick={props.getNextImage} aria-label="Next Image"></button></div>
      </div>
      <div className="carousel_bar">
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