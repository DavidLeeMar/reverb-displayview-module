import React from 'react';
import axios from 'axios';
import Nudge from './Nudge.jsx';
import Seller from './Seller.jsx';
import About from './About.jsx';
import Findmore from './Findmore.jsx';
import Title from './Title.jsx';
import Pricing from './Pricing.jsx';
import Carousel from './Carousel.jsx';
import Specifications from './Specifications.jsx';
import SignupModal from './SignupModal.jsx';
import ImageModal from './ImageModal.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {},
      current_image: "",
      current_index: 0,
      images: [],
      images_length: 0,
      showSignUpModal: false,
      showImageModal: false
    }
    this.getProduct = this.getProduct.bind(this)
    this.getNextImage = this.getNextImage.bind(this)
    this.getPrevImage = this.getPrevImage.bind(this)
    this.handleImageBarClick = this.handleImageBarClick.bind(this)
    this.handleSignUpModalToggle = this.handleSignUpModalToggle.bind(this)
    this.handleImageModalToggle = this.handleImageModalToggle.bind(this)
  }

  componentDidMount() {
    this.getProduct(14)
  }

  getProduct(id) {
    axios.get(`/api/display/${id}`)
    .then((results)=>{
      let imagesArray = [];
      results.data.forEach((item) => imagesArray.push(item.imagename));
      this.setState({
        product: results.data[0],
        current_image: imagesArray[0],
        current_index: 0,
        images: imagesArray,
        images_length: imagesArray.length
      })
    })
    .catch((err) => console.error(err))
  }

  getNextImage() {
    if (this.state.current_index + 1 === this.state.images_length) {
      this.setState({
        current_image: this.state.images[0],
        current_index: 0
      })
    } else {
      this.setState({
        current_image: this.state.images[this.state.current_index + 1],
        current_index: this.state.current_index + 1
      })
    }
  }

  getPrevImage() {
    if (this.state.current_index - 1 < 0) {
      this.setState({
        current_image: this.state.images[this.state.images_length - 1],
        current_index: this.state.images_length - 1
      })
    } else {
      this.setState({
        current_image: this.state.images[this.state.current_index - 1],
        current_index: this.state.current_index - 1
      })
    }
  }

  handleImageBarClick(index) {
    this.setState({
      current_image: this.state.images[index],
      current_index: index
    })
  }

  handleSignUpModalToggle() {
    this.setState({
      showSignUpModal: !this.state.showSignUpModal
    })
  }

  handleImageModalToggle() {
    this.setState({
      showImageModal: !this.state.showImageModal
    })
  }

  render() {
    return(
    <div className="container_dv">
      <div className="main_dv">
        <Carousel
          state={this.state}
          getPrevImage={this.getPrevImage}
          getNextImage={this.getNextImage}
          handleImageBarClick={this.handleImageBarClick}
          handleImageModalToggle={this.handleImageModalToggle}/>
        <ImageModal state={this.state} handleImageModalToggle={this.handleImageModalToggle} handleImageBarClick={this.handleImageBarClick} />
        <About state={this.state}/>
        <Specifications state={this.state} />

      </div>
      <div className="sidebar_dv">
        <Title state={this.state}/>
        <Pricing state={this.state} handleSignUpModalToggle={this.handleSignUpModalToggle}/>
        <Nudge />
        <Seller state={this.state} />
        <Findmore />
        <SignupModal showSignUpModal={this.state.showSignUpModal} handleSignUpModalToggle={this.handleSignUpModalToggle}/>
      </div>
    </div>
    )
  }

}

export default App