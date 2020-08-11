import React from 'react';

class Specifications extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      readMoreSpecs: false,
      openSpecs: false
    }
    this.handleClickOpenSpecs = this.handleClickOpenSpecs.bind(this)
    this.handleClickReadMore = this.handleClickReadMore.bind(this)
  }

  handleClickOpenSpecs() {
    this.setState({
      openSpecs: !this.state.openSpecs
    })
  }

  handleClickReadMore() {
    this.setState({
      readMoreSpecs: !this.state.readMoreSpecs
    })
  }


  render() {
    if (!this.state.openSpecs) {
      return (
        <div onClick={this.handleClickOpenSpecs}>
          <h3>Product Specs</h3>
        </div>
      )
    } else if (this.state.readMoreSpecs) {
      return (
        <div>
          <div onClick={this.handleClickOpenSpecs}>
            <h3>Product Specs</h3>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>Condition</td>
                  <td>"Brand New"
                    <div>
                      <span className="opacity-70 mr-space">Brand New items are   sold by an authorized dealer or original builder and   include all original packaging.</span>
                      <a className="" href="https://reverb.com/news/  gear-conditions-and-what-they-mean#brand-new">learn   more</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td><a className="" href="https://reverb.com/brand/squier">Squier</a></td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td><a className="" href="https://reverb.com/marketplace?make=squier&amp;product_type=electric-guitars&amp;query=Paranormal%20Super-Sonic">Paranormal Super-Sonic</a></td>
                </tr>
                <tr>
                  <td>Finish</td>
                  <td><a className="" href="https://reverb.com/marketplace?product_type=electric-guitars&amp;query=Ice%20Blue%20Metallic">Ice Blue Metallic</a></td>
                </tr>
                <tr>
                  <td>Categories</td>
                  <td><a className="" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</a></td>
                </tr>
                <tr>
                  <td>Finish Style</td>
                  <td><a className="" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</a></td>
                </tr>
                <tr>
                  <td>Number of Strings</td>
                  <td><a className="" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</a></td>
                </tr>
                <tr>
                  <td>Right / Left Handed</td>
                  <td><a className="" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</a></td>
                </tr>
                <tr>
                  <td>Body Features</td>
                  <td><a className="" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</a></td>
                </tr>
                <tr>
                  <td>Neck Material</td>
                  <td><a className="" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</a></td>
                </tr>
                <tr>
                  <td>Body Type</td>
                  <td><a className="" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</a></td>
                </tr>
                <tr>
                  <td>Body Material</td>
                  <td><a className="" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</a></td>
                </tr>
                <tr>
                  <td>Fretboard Material</td>
                  <td><a className="" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</a></td>
                </tr>
                <tr>
                  <td>
                    <button className="collapsing-list__toggle" onClick={this.handleClickReadMore}>Collapse</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div onClick={this.handleClickOpenSpecs}>
            <h3>Product Specs</h3>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>Condition</td>
                  <td>"Brand New"
                    <div>
                      <span className="opacity-70 mr-space">Brand New items are   sold by an authorized   dealer or           original builder and   include all original packaging.</span>
                      <a className="" href="https://reverb.com/news/              gear-conditions-and-what-they-mean#brand-new">learn   more</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td><a className="" href="https://reverb.com/brand/squier">Squier</a></td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td><a className="" href="https://reverb.com/marketplace?make=squier&amp;            product_type=electric-guitars&amp;query=Paranormal%20Super-Sonic">Paranormal   Super-Sonic</a></td>
                </tr>
                <tr>
                  <td>Finish</td>
                  <td><a className="" href="https://reverb.com/marketplace?product_type=electric-guitars&  amp;          query=Ice%20Blue%20Metallic">Ice Blue Metallic</a></td>
                </tr>
                <tr>
                  <td>Categories</td>
                  <td><a className="" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</  a></td>
                </tr>
                <tr>
                  <td>
                    <button className="collapsing-list__toggle" onClick={this.handleClickReadMore}>Show More</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )

    }
  }
}


export default Specifications