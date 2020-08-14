import React from 'react';
import Nudge from './Nudge.jsx';
import Seller from './Seller.jsx';
import About from './About.jsx';
import Findmore from './Findmore.jsx';
import Title from './Title.jsx';
import Pricing from './Pricing.jsx';
import Carousel from './Carousel.jsx';
import Specifications from './Specifications.jsx';
import SignupModal from './SignupModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {},
      current_image: "https://images.reverb.com/image/upload/s--Ky9kGeaz--/f_auto,t_large/v1595453443/hmxe3qot7tqukyoplqpo.jpg",
      current_index: 0,
      images: ["https://images.reverb.com/image/upload/s--Ky9kGeaz--/f_auto,t_large/v1595453443/hmxe3qot7tqukyoplqpo.jpg", "https://images.reverb.com/image/upload/s--2zNKv-Y2--/f_auto,t_large/v1595453447/qjvpccyqrvkpzndnogwv.jpg", "https://images.reverb.com/image/upload/s--MvjDEwZM--/f_auto,t_supersize/v1595453447/pdvwx3gl9egf5rbowwqf.jpg"],
      images_length: 3,
      showModal: false
    }
    this.getProduct = this.getProduct.bind(this)
    this.getNextImage = this.getNextImage.bind(this)
    this.getPrevImage = this.getPrevImage.bind(this)
    this.handleImageBarClick = this.handleImageBarClick.bind(this)
    this.handleSignUpModalToggle = this.handleSignUpModalToggle.bind(this)
  }

  getProduct() {
  //axios request to get data and setState
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
      showModal: !this.state.showModal
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
          handleImageBarClick={this.handleImageBarClick} />
        <About />
        <Specifications />

      </div>
      <div className="sidebar_dv">
        <Title />
        <Pricing state={this.state} handleSignUpModalToggle={this.handleSignUpModalToggle}/>
        <Nudge />
        <Seller />
        <Findmore />
        <SignupModal showModal={this.state.showModal} handleSignUpModalToggle={this.handleSignUpModalToggle}/>
      </div>
    </div>
    )
  }

}

export default App