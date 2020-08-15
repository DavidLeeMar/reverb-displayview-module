import React from 'react';

var ImageModal = (props) => {

  return (
    <div id="myImageModal" className={props.state.showImageModal ? 'openedModal' : 'closedModal'}>

      {/*<!-- Modal content -->*/}
      <div className="modal-content">
        <span className="close" onClick={props.handleImageModalToggle}>&times;</span>
        <div>
          <div onMouseEnter={()=> console.log('Hello')} className="mainimagedivdv">
            <img className="mainimagedv" src={props.state.current_image} />
          </div>
          <div></div>
        </div>

      </div>

    </div>
  )

}





export default ImageModal