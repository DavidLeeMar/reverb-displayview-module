import React from 'react';

class Specifications extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productView: 0
    }
    this.handleClickOpenSpecs = this.handleClickOpenSpecs.bind(this)
    this.handleClickReadMore = this.handleClickReadMore.bind(this)
  }

  handleClickOpenSpecs() {
    this.setState({
      productView: this.state.productView ? 0 : 1
    })
  }

  handleClickReadMore() {
    this.setState({
      productView: 2
    })
  }



  render() {

    let firstSection;
    let secondSection;

    if (this.state.productView > 0) {

      let showMoreButton;

      if (this.state.productView === 1) {
        showMoreButton =
        (
        <tr>
          <td>
            <button className="collaspingtoggledv" onClick={this.handleClickReadMore}>Show More</button>
          </td>
        </tr>
        )
      }

      firstSection =
      (
      <>
        <tr>
          <td className="eachspecificationdv">Condition</td>
          <td>Brand New
            <div>
              <span className="opacity-70dv">Brand New items are sold by an authorized dealer or original builder and include all original packaging.</span>
              <a className="specificationlinkdv" href="https://reverb.com/news/              gear-conditions-and-what-they-mean#brand-new">learn   more</a>
            </div>
          </td>
        </tr>
        <tr>
          <td className="eachspecificationdv">Brand</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/brand/squier">Squier</a></td>
        </tr>
        <tr>
          <td className="eachspecificationdv">Model</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/marketplace?make=squier&amp;            product_type=electric-guitars&amp;query=Paranormal%20Super-Sonic">Paranormal   Super-Sonic</a></td>
        </tr>
        <tr>
          <td className="eachspecificationdv">Finish</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/marketplace?product_type=electric-guitars&  amp;          query=Ice%20Blue%20Metallic">Ice Blue Metallic</a></td>
        </tr>
        <tr>
          <td className="eachspecificationdv">Categories</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</  a></td>
        </tr>
        {showMoreButton}
      </>
      )
    }

    if (this.state.productView > 1) {
      secondSection =
      (
      <>
        <tr>
          <td className="eachspecificationdv">Finish Style</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/c/electric-guitars/solid-body">Metallic</a></td>
        </tr>
        <tr>
          <td className="eachspecificationdv">Number of Strings</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/c/electric-guitars/solid-body">6 String</a></td>
        </tr>
        <tr>
          <td className="eachspecificationdv">Right / Left Handed</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/c/electric-guitars/solid-body">Right Handed</a></td>
        </tr>
        <tr>
          <td className="eachspecificationdv">Body Features</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/c/electric-guitars/solid-body">Offset</a></td>
        </tr>
        <tr>
          <td className="eachspecificationdv">Neck Material</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/c/electric-guitars/solid-body">Maple</a></td>
        </tr>
        <tr>
          <td className="eachspecificationdv">Body Type</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/c/electric-guitars/solid-body">Solid Body</a></td>
        </tr>
        <tr>
          <td className="eachspecificationdv">Body Material</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/c/electric-guitars/solid-body">Poplar</a></td>
        </tr>
        <tr>
          <td className="eachspecificationdv">Fretboard Material</td>
          <td><a className="specificationlinkdv" href="https://reverb.com/c/electric-guitars/solid-body">Laurel</a></td>
        </tr>
        <tr>
          <td>
            <button className="collaspingtoggledv" onClick={() => this.setState({productView: 1})}>Collapse</button>
          </td>
        </tr>
      </>
      )
    }

   return (
    <div className="productspecsborderdv">
      <div className="productspecstitledv" onClick={this.handleClickOpenSpecs}>
        <h3>Product Specs</h3>
        {this.state.productView === 0
         ? <div className="productspecsarrowdowngreydv"></div>
         : <div className="productspecsarrowupgreydv"></div>
        }
      </div>
      <table>
        <tbody>
        {firstSection}
        {secondSection}
        </tbody>
      </table>
    </div>
   )
  }
}

export default Specifications