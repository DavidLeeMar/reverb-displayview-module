import React from 'react';
import Nudge from './Nudge.jsx';
import Seller from './Seller.jsx';
import About from './About.jsx';
import Findmore from './Findmore.jsx';
import Title from './Title.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
    <div id="level1containerdv">
      <div className="main_dv">
       { /*Carousel
           Product Specifications */}
        <About />
      </div>
      <div className="sidebar_dv">
        <Title />
        {/*pricing*/}
        <Nudge />
        <Seller />
        <Findmore />
      </div>
    </div>
    )
  }

}

export default App