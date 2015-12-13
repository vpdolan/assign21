import React from 'react';
import ReactDom from 'react-dom';

let EditView = React.createClass({
  
  getInitialState(){
    return({
      objectId   :  this.props.objectId,
      Title      :  this.props.Title,
      Terrior    :  this.props.Terrior,
      Food       :  this.props.Food,
      ServeTemp  :  this.props.ServeTemp,
      Description:  this.props.Description,
      Photos     :  this.props.Photos

    });

  },    


  setId(event) {
    let newId = event.currentTarget.value;
    this.setState({objectId: newId});
  },

  HomeClickHandler(){
    this.props.homeBtnClick();
  },
  
  AddClickHandler(){
    this.props.AddBtnClick();
  },

  SaveClickHandler (event) {
    event.preventDefault();
    console.log("button clicked!");
    this.props.saveBtnClick(
      this.state.objectId,
      this.state.Title,
      this.state.Terrior,
      this.state.Food,
      this.state.ServeTemp,
      this.state.Description,
      this.state.Photos);
  },

  updateName(event){
    let wineName = event.target.value;
    this.setState({
      Title:wineName})    
  },

  updatePhotos(event){
    let photos = event.target.value;
    this.setState({
      Photos:photos})
  }, 

  updateTerrior(event){
    let terrior = event.target.value;
    this.setState({
      Terrior:terrior})  
  },

  updateFood(event){
  let food = event.target.value;
  this.setState({
    Food:food})
  },

  updateServeTemp(event){
  let serveTemp = event.target.value;
  this.setState({
    ServeTemp:serveTemp})
  },

  updateDescription(event){
  let description = event.target.value;
  this.setState({
    Description:description})
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

      <div className="detailsEdit">
        <p>Edit Selection</p>
        <div className="edit-container">
          <form className="edit-form">
            <div>
              <input className="id" onChange={this.setId} type="text" value={this.state.objectId}/>
            </div>

            <div>
              <label className="edit-form-label">Title:</label>
              <input className="winename" type="text" value={this.state.Title}
                onChange={this.updateTitle}/>
            </div>  

            <div>
              <label className="edit-form-label">Photo URL:</label>
              <input className="photos" type="text" value={this.state.Photos}
                onChange={this.updatePhotos}/>
            </div>   

            <div>
              <label className="edit-form-label">Terrior:</label>
              <input className="terrior" type="text" value={this.state.Terrior}
                onChange={this.updateTerrior}/>
            </div>   

            <div>
              <label className="edit-form-label">Food Pairings:</label>
              <input className="food" type="text" value={this.state.Food}
                onChange={this.updateFood}/>
            </div>   

            <div>
              <label className="edit-form-label">Serve Temp:</label>
              <input className="winename" type="text" value={this.state.Title}
                onChange={this.updateTitle}/>
            </div> 

            <div>
              <label className="edit-form-label">Description:</label>
              <textarea className="description" type="text" value={this.state.Description}
                onChange={this.updateDescription}/>
            </div>

            <div>
              <button onClick={this.SaveClickHandler} className="save">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>         
      
    );
  }

});

export default EditView;      