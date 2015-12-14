import React from 'react';
import SingleModel from '../resources';

//export default React.createClass({

let HomeView = React.createClass({
  
  SelectHandler(id){
    this.props.onImageSelect(id);
  },

  AddClickHandler() {
    this.props.AddBtnClick();
  },

  displayAll(data) {
    return (
      <div className="thumbnails" key={data.objectId}>
        <img className="collection-display" src={data.Photos} width="200px" height="200px" 
          id={data.objectId} onClick={() => this.SelectHandler(data.objectId)}/>
      </div>
    );  
  },

  render() {
    return (
        <div className="collection-view">
          <div className="collection-header">
            <h2 className="header-text">The Fabulous World of Grapes</h2>
            <img className="header-image" src="http://www.amorosa.it/images/h-vineyard-cellar.jpg"/>
          </div> 

          <div className="buttons">
            <button onClick={this.AddClickHandler} className="add">Add</button>
          </div>
          
          <hr/>

          <div className="collection-display">{this.props.data.map(this.displayAll)} 
          </div>

          <hr/>

        </div>           
      
     );
  }
}); 

export default HomeView;




 
     

 





    