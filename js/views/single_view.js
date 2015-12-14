import React from 'react';

let SingleView = React.createClass({
  
  clickHandler(event) {
    this.props.onSelect(this.props.id);
},

HomeClickHandler() {
  this.props.homeBtnClick();
},

EditClickHandler(id) {
    this.props.editBtnClick(id);
  }, 

render() {
  console.log(this.props);

return (
  <div className="singleImage"> 
    <div className="collection-header">
      <h2 className="header-title">The Fabulous World of Grapes</h2>
      <img className="header-image" src="http://www.amorosa.it/images/h-vineyard-cellar.jpg"/>
    </div>

    <div className="buttons">
      <button onClick={this.HomeClickHandler} className="home">Home</button>
    </div>
    
    <hr/>  
      
    <img className="single" width="325px" height="325px" src={this.props.data.Photos}/>

    <div className="details">
      <p>Title  :  {this.props.data.Title}</p>
      <p>Terroir  :  {this.props.data.Terroir}</p>
      <p>Serve With  :  {this.props.data.Food}</p>
      <p>Serve Temp  :  {this.props.data.Temp}</p> 
      <p>About  :  {this.props.data.Description}</p>
      <button onClick={() => this.EditClickHandler(this.props.data.objectId)} className="edit">Edit</button>
    </div> 
    <hr/>      
           
  </div>
   
   );
  }
 });   

export default SingleView;