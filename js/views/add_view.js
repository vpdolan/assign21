import React from 'react';

let AddView = React.createClass({
  
  HomeClickHandler(){
    this.props.homeBtnClick();
  },

  SaveClickHandler(event){
    event.preventDefault();
    console.log('button clicked');
    this.props.saveBtnClick();
  },

  render() {
    return (
  <div className="singleImage">
    <div className="collection-header">
      <h2 className="header-text">The Fabulous World of Grapes</h2>
      <img className="header-image" src="http://www.amorosa.it/images/h-vineyard-cellar.jpg"/>
    </div>  

    <div className="buttons">
      <button onClick={this.HomeClickHandler} className="home">Home</button>
    </div>
    
    <hr/>  
     
    <div className="detailsAdd">
      <p>Add A New Selection</p>
      <div className="add-container">
        <form className="add-form">
          <div>
            <label className="add-form-label">Title:</label>
            <input className="wineTitle" type="text" placeholder="Please Enter Wine Name"/>
          </div>

          <div>
            <label className="add-form-label">Photo:</label>
            <input className="photos" type="text" placeholder="Please Enter Photo URL"/>
          </div> 
          
          <div>
            <label className="add-form-label">Terroir:</label>
            <input className="terroir" type="text" placeholder="Country/Region"/>
          </div>
          
          <div> 
            <label className="add-form-label">Food:</label>
            <input className="food" type="text" placeholder="Pairs With . . . "/>
          </div>

          <div>
            <label className="add-form-label">Serve Temp:</label>
            <input className="temp" type="text" placeholder="Ideal Serving Temp. . ."/>
          </div> 

          <div>
            <label className="add-form-label-desc">Description:</label>
            <textarea className="description" type="text" placeholder="Brief Overview"/>
          </div>   
                       
          <div className="btn">
            <button onClick ={this.SaveClickHandler} className='save'>Save</button>
          </div>

        </form> 

      </div>

    </div>
    
  </div>
                
                         
  );
 }
});

export default AddView; 


 