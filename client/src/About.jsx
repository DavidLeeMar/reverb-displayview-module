import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutListingToggle: false
    }
    this.handleAboutListingToggle = this.handleAboutListingToggle.bind(this)
  }

  handleAboutListingToggle() {
    this.setState({
      aboutListingToggle: !this.state.aboutListingToggle
    })
  }

  render() {
      if(!this.state.aboutListingToggle) {
        return (
          <div className="aboutlistingdv">
            <div>
              <h3>About This Listing</h3>
            </div>
            <div>
              <div>
                <div className="aboutcontentdv">
                {this.props.state.product.productdescription}
                </div>
                <button className="button-as-link-dv" onClick={this.handleAboutListingToggle}>read more... </button>
              </div>
              <div>
                <button className="paymentsandreturnsdv" type="button">Payment &amp;   Returns</button>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="aboutlistingdv">
            <div>
              <h3>About This Listing</h3>
            </div>
            <div>
              <div>
                <div className="aboutcontentfulldv">
                {this.props.state.product.productdescription}
                </div>
              </div>
              <div>
                <button className="paymentsandreturnsdv" type="button">Payment &amp;   Returns</button>
              </div>
            </div>
          </div>
        )
      }
  }
}

export default About