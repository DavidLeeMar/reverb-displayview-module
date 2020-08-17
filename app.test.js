import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Pricing from './Pricing.jsx';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });



describe('Pricing', () => {
  it('should be true', ()=>{
    const foo = true;
    expect(foo).toBe(true);
  });

  it("renders pricing information", () => {
    const wrapper = shallow(<Pricing />);
    const price = <span className="price-displaydv"></span>
    expect(wrapper.contains(price)).toEqual(true);
  });

});

