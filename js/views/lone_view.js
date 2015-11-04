import React from 'react';

let LoneView = React.createClass({
  addBackHandler() {
    this.props.onBackClick();
  },
  
  addEditHandler() {
    this.props.onEditClick();
  },
  
  addPicClickHandler() {
    this.props.onAddClick();
  },

  render(data) {
    console.log(this.props);

return (
  <div className="lonePicPage" key={this.props.images.objectId}>

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
               <button>Upload New Photo</button>
               </li>
            <li onClick={() => this.addBackHandler()}>
               <button>Update Wine Info</button>
               </li>   
         </ul>
        </div>

       <div className="navBar">
         <button onClick={() => this.addBackHandler()}>Back Home</button>  
         <button onClick={() => this.addEditHandler()}>Cancel</button> 
       </div>

     <form className="newPicForm">
       <input type="text" placeholder="Title:" className="giveTitle"></input>
       <input type="text" placeholder="Photo URL:" className="givePhoto" min="75" max="150">
        </input>
         <br/>
       <input type="text" placeholder="Description:" className="giveDescription" min="25" max="55">
         </input>
       <input type="text" placeholder="Terroir:"  className="giveTerrior"></input>
       <input type="text" placeholder="Best Served With:" className="giveFood" min="30" max="85">
         </input>  
     </form>
     
      <div className="footer">
        <p>Vince Dolan</p>
        <p>2015</p>
      </div>
      
    </div>
   
   );
  }
 });   

export default LoneView;