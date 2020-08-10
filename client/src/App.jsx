import React from 'react';
import Nudge from './Nudge.jsx';
import Seller from './Seller.jsx';
import About from './About.jsx';
import Findmore from './Findmore.jsx';
import Title from './Title.jsx';
import Pricing from './Pricing.jsx';
import Carousel from './Carousel.jsx';
import Specifications from './Specifications.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
    <div id="level1containerdv">
      <div className="main_dv">
        <Carousel />
        <About />
        <Specifications />

      </div>
      <div className="sidebar_dv">
        <Title />
        <Pricing />
        <Nudge />
        <Seller />
        <Findmore />
      </div>
    </div>
    )
  }

}

export default App