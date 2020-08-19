// import React from 'react';
// import ReactDOM from 'react-dom';
// import {shallow} from 'enzyme';
import Nudge from '../client/src/Nudge.jsx';
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// configure({ adapter: new Adapter() });
import SignupModal from '../client/src/SignupModal.jsx';


describe('<Nudge /> rendering', () => {
    it('should render three child <div>', () => {
        let wrapper = shallow(<Nudge />);
        expect(wrapper.children('div')).toHaveLength(3);
    });

    it('should render nine <div>', () => {
      let wrapper = shallow(<Nudge />);
      expect(wrapper.find('div')).toHaveLength(10);
  });
});

// describe('<SignupModal /> interactions', () => {
//   it('should call the onClick function when span is clicked', () => {
//       const mockedhandleSignUpModalToggle = jest.fn();
//       let wrapper = shallow(<SignupModal />);
//       wrapper.instance().handleSignUpModalToggle = mockedhandleSignUpModalToggle;
//       wrapper.find('span').first().props().onClick();
//      expect(mockedhandleSignUpModalToggle).toHaveBeenCalledTimes(1);
//   });
// });



describe('<SignupModal /> interactions', () => {
  it('should call the onClick function when span is clicked', () => {
    const mockCallBack = jest.fn();

    const wrapper = shallow(<SignupModal handleSignUpModalToggle={mockCallBack} />);
    wrapper.find('.close').simulate('click');
    wrapper.find('.close').simulate('click');

    expect(mockCallBack.mock.calls.length).toEqual(2);
  });

  it('should contain an element with className openedModal', () => {
    const wrapper = shallow(<SignupModal showSignUpModal={true} />);
    expect(wrapper.find('.openedModal')).toHaveLength(1);
  });

  it('should contain an element with className closedModal', () => {
    const wrapper = shallow(<SignupModal showSignUpModal={false} />);
    expect(wrapper.find('.closedModal')).toHaveLength(1);
  });

  it('should contain no elements with className closedModal', () => {
    const wrapper = shallow(<SignupModal showSignUpModal={true} />);
    expect(wrapper.find('.closedModal')).toHaveLength(0);
  });
});
