import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

// let HomeView = React.createClass({
  lonePicClickHandler(id) {
    this.props.onLonePicClick(id);
  },

  addPicClickHandler() {
    this.props.onAddClick();
  },

  addBackHandler( ) {
    this.props.onBackClick();
  },

  processData(data) {
    return (
      <div key={data.objectId} className="squares"
      onClick={() => this.lonePicClickHandler(data.objectId)}>
      <ul>  
      <li><img src={data.Photos}></img></li>
      </ul>
   </div> 
    );
  },

    render() {
      return (
        <div className="homePage">

          <div className="topbox">
            <div className="theme">
             <img src="http://www.amorosa.it/images/h-vineyard-cellar.jpg"/>
            </div> 

          <div className="navBar">
           <ul>
             <li onClick={() => this.addBackHandler()}>
              <button>Home</button>
              </li>
             <li onClick={() => this.addBackHandler()}>
              <button>Grape</button>
              </li>
             <li onClick={() => this.addBackHandler()}>
               <button>About</button>
               </li>                
             <li onClick={() => this.addPicClickHandler()}>
               <button>Update Grape Info</button>
               </li>
             <li onClick={() => this.addBackHandler()}>
               <button>Upload New Photo</button>
               </li>   
            </ul>
           </div>
          </div>
          
          <div className="imageSquares">{this.props.pictures.map(this.processData)}>
            <div className="squares">
            </div>
          </div>    

          <div className="footer">
           <p>Vince Dolan</p>
           <p>2015</p>
          </div>
      </div>  

     );
    }
   }); 

 





    