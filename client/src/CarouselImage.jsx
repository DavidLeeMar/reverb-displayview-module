import React from 'react';

var CarouselImage = (props) => {

  if (props.current_index === props.index) {
    return (
      <div className="imagebarspandv" onClick={() => {props.handleImageBarClick(props.index)}}>
        <img className="selectedthumbnaildv" src={props.image} />
      </div>
    )
  } else {
    return (
      <div className="imagebarspandv" onClick={() => {props.handleImageBarClick(props.index)}}>
        <img className="unselectedthumbnaildv" src={props.image} />
      </div>
    )
  }

}

export default CarouselImage