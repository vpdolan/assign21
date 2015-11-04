import React from 'react';
import ReactDom from 'react-dom';

let EditView = React.createClass({

  addBackHandler() {
    this.props.onBackClick();
  },


  render() {
    return (
      <div className="navBar">
       <ul>
         <li onClick={() => this.addBackHandler()}><button>Home</button></li>
         <li onClick={() => this.addPicClickHandler()}><button>Update Wine Info</button></li>  
        </ul>
       </div>
    );
  }

});

export default EditView;      