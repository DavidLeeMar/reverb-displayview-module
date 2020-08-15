import React from 'react';
import CarouselImage from './CarouselImage.jsx'



class Carousel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
    this.handleMouseToggle = this.handleMouseToggle.bind(this)
  }

  handleMouseToggle() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    return(
      <div>
        {this.state.hover ?
        <div onMouseLeave={this.handleMouseToggle} className="mainimagedivdv">
          <button className="image_prevdv" onClick={this.props.getPrevImage} aria-label="Previous Image"></button>
          <img className="mainimagedv" src={this.props.state.current_image} />
          <button className="image_nextdv" onClick={this.props.getNextImage} aria-label="Next Image"></button>
        </div>
        :
        <div onMouseEnter={this.handleMouseToggle} className="mainimagedivdv">
          <img className="mainimagedv" src={this.props.state.current_image} />
        </div>
        }
        <div className="carousel_bardv">
          {this.props.state.images.map((item, index) => {
            return <CarouselImage
                     image={item}
                     index={index}
                     key={index}
                     current_index={this.props.state.current_index}
                     handleImageBarClick={this.props.handleImageBarClick}/>
          })}
        </div>
      </div>
    )


  }
}

export default Carousel