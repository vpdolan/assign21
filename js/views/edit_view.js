import React from 'react';

let EditView = React.createClass({
  
  getInitialState(){
    return ({
      objectId   :  this.props.data.objectId,
      Title      :  this.props.data.Title,
      Terroir    :  this.props.data.Terroir,
      Food       :  this.props.data.Food,
      Temp       :  this.props.data.Temp,
      Description:  this.props.data.Description,
      Photos     :  this.props.data.Photos

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

  SaveClickHandler(event) {
    event.preventDefault();
    console.log('button clicked!');
    this.props.saveBtnClick(
      this.state.objectId,
      this.state.Title,
      this.state.Terroir,
      this.state.Food,
      this.state.Temp,
      this.state.Description,
      this.state.Photos);
  },

  updateTitle(event){
    let wineTitle = event.target.value;
    this.setState({
      Title:wineTitle})    
  },

  updatePhotos(event){
    let photos = event.target.value;
    this.setState({
      Photos:photos})
  }, 

  updateTerroir(event){
    let terroir = event.target.value;
    this.setState({
      Terroir:terroir})  
  },

  updateFood(event){
  let food = event.target.value;
  this.setState({
    Food:food})
  },

  updateTemp(event){
  let temp = event.target.value;
  this.setState({
    Temp:temp})
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
        <p>Edit Selection Form</p>
        <div className="edit-container">
          <form className="edit-form">
            <div>
              <input className="id" onChange={this.setId} type="text" value={this.state.objectId}/>
            </div>

            <div>
              <label className="edit-form-label">Title:</label>
              <input className="wineTitle" type="text" value={this.state.Title}
                onChange={this.updateTitle}/>
            </div>  

            <div>
              <label className="edit-form-label">Photo URL:</label>
              <input className="photos" type="text" value={this.state.Photos}
                onChange={this.updatePhotos}/>
            </div>   

            <div>
              <label className="edit-form-label">Terroir:</label>
              <input className="terroir" type="text" value={this.state.Terroir}
                onChange={this.updateTerroir}/>
            </div>   

            <div>
              <label className="edit-form-label">Food Pairings:</label>
              <input className="food" type="text" value={this.state.Food}
                onChange={this.updateFood}/>
            </div>   

            <div>
              <label className="edit-form-label">Serve Temp:</label>
              <input className="temp" type="text" value={this.state.Temp}
                onChange={this.updateTemp}/>
            </div> 

            <div>
              <label className="edit-form-label-desc">Description:</label>
              <textarea className="description" type="text" value={this.state.Description}
                onChange={this.updateDescription}/>
            </div>

            <div className="btn">
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