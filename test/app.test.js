import Nudge from '../client/src/Nudge.jsx';
import SignupModal from '../client/src/SignupModal.jsx';
import App from '../client/src/App.jsx';

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

  it('should have state set to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('showImageModal')).toBe(false);
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


