import React from 'react';

var CarouselImage = (props) => {

  if (props.current_index === props.index) {
    return (
      <div className="imagebarselecteddiv" onClick={() => {props.handleImageBarClick(props.index)}}>
        <img src={props.image} />
      </div>
    )
  } else {
    return (
      <div className="imagebardiv" onClick={() => {props.handleImageBarClick(props.index)}}>
        <img src={props.image} />
      </div>
    )
  }

}

export default CarouselImage