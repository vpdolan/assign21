import React from 'react';
import ReactDom from 'react-dom';

let AddNewView = React.createClass({
  addBackHandler() {
    this.props.onBackClick();
  },

  addPicClickHandler() {
    this.props.onAddClick();
  },

  addUploadHandler() {
    this.props.onUploadClick();
  },

  render () {
    return (
  <div className="newPicView">

     <div className="theme">
        <img src="http://www.amorosa.it/images/h-vineyard-cellar.jpg"/>
     </div>

     <div className="navBar">
      <ul>
       <li onClick={() => this.addBackHandler()}>
        <button>Home</button>
       </li>
       <li onClick={() => this.addPicClickHandler()}>
        <button>Grape</button>
        </li>
       <li onClick={() => this.addBackClickHandler()}>
        <button>About</button>
        </li>
       <li onClick={() => this.addBackClickHandler()}>
        <button>Contact</button>  
       </li>
      </ul>       
     </div>


     
     
     
     <div className="userSubmits">
      <button onClick={() => this.addBackHandler()}>Cancel</button>
      <button onClick={() => this.addUploadHandler()}>Wine Details</button>
     </div>
     <hr/>

     <fieldset>
          <legend>Information</legend>
            <label>Title:<br/>
             <input type="text" name="title"/></label>
              <br/>
            <label>Description:<br/>
             <input type="text" name="description"/></label>
              <br/>
            <label>Terrior:<br/>
             <input type="text" name="terroir"/></label>
              <br/>
             <label>Photo Url:<br/>
              <input type="text" className="givePhoto" min="75" max="150"></input>
              </label> 
              <br/>        
            <p>Please tell us which wines interest you!</p> 

            <textarea name="comments" cols="25" rows="5">Enter your comments...</textarea>
            <button onClick ={this.addBackHandler} className='save'>Save</button>             
            <br/>
      </fieldset>               
     
     <div className="footer">
       <p>Vince Dolan</p>
       <p>2015</p>
     </div>
     
  </div>

  );
 }
});

export default AddNewView; 


 