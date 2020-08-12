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
                The Paranormal Super-Sonic™ is stranger than fiction with its reverse body shape an headstock, producing massive tone courtesy of its dual Squier Atomic humbucking pickups. The Super-Sonic is lightning fast with its “C”-shape neck profile and narrow 1.5” nut width, and also features a vintage-style tremolo for expressive string bending effects. With its otherworldly looks, transcendent playability and earth-shattering tone, this model will transport any player into a Paranormal realm.
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
                The Paranormal Super-Sonic™ is stranger than fiction with its reverse body shape and   headstock, producing massive tone courtesy of its dual Squier Atomic humbucking pickups. The Super-Sonic is lightning fast with its “C”-shape neck profile and narrow 1.5” nut width, and   also features a vintage-style tremolo for expressive string bending effects. With its   otherworldly looks, transcendent playability and earth-shattering tone, this model will   transport any player into a Paranormal realm.
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