import React from 'react';


class SignupModal extends React.Component {
  constructor(props) {
    super (props)
  }

  render() {
    return (
      <div id="myModal" className={this.props.showSignUpModal ? 'openedModal' : 'closedModal'}>

        {/*<!-- Modal content -->*/}
        <div className="modal-content">
          <span className="close" onClick={this.props.handleSignUpModalToggle}>&times;</span>

          <div className="signupmodaltitledv">
            <div className="signuptabdv">Sign Up</div>
            <div className="logintabdv">Log In</div>
          </div>
          <div className="signupbannerdv">
            <span className="signupbannerheadingdv">Join Reverb to Watch This Listing</span><br></br>
            <span className="signupbannertextdv">We'll notify you if the price drops</span><br></br>
            <span className="signupbannertextdv">We'll notify you if anyone else makes an offer</span>
          </div>
          <form>
            <div className="formnamedv">
              <label className="fieldnamesignup">
                First name <br></br>
              <input type="text" name="name" />
              </label>
              <label className="fieldnamesignup">
                Last name<br></br>
              <input type="text" name="name" />
              </label>
            </div>
            <label className="fieldnamesignup">
              Email<br></br>
            <input type="text" name="name" />
            </label>
            <label className="fieldnamesignup">
              Email Confirmation<br></br>
            <input type="text" name="name" />
            </label>
            <label className="fieldnamesignup">
              Password<br></br>
            <input type="text" name="name" />
            </label>

            <input type="submit" value="Sign Up" /><br></br>

            <input type="checkbox" checked={false} onChange={() => console.log('Hello')}/> <span>Get the latest news, deals, and promotions via email</span><br></br>
            <input type="checkbox" checked={false} onChange={() => console.log('Hello')}/><span>By clicking Sign Up, I expressly agree to accept Reverb’s Terms of Use and Privacy Policy - REQUIRED</span>

          </form>

        </div>

      </div>
    )
  }
}

export default SignupModal