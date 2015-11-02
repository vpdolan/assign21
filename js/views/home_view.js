import React from 'react';

let HomeView = React.createClass({
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
      <div key={data.objectId}
      onClick={() => this.lonePicClickHandler(data.objectId)} className="squares">

      <img className="photo"
      src={data.PhotoLink}/>
   </div> 
  );
 },

    render() {
      return (
        <div className="homePage">

          <div className="header">
            <div className="theme">
             <img src="http://www.google.com/imgres?imgurl=http://previews.123rf.com/images/samot/samot1401/samot140100048/25407508-White-wine-with-barrel-on-vineyard-in-Chianti-Tuscany-Italy-Stock-Photo.jpg&imgrefurl=http://www.123rf.com/photo_25407508_white-wine-with-barrel-on-vineyard-in-chianti-tuscany-italy.html&h=866&w=1300&tbnid=RWymPDoaRmmeIM:&docid=EahAzMUPrjI7WM&ei=TbY2VurZK4rrmAG84qnYBw&tbm=isch&ved=0CDAQMygPMA9qFQoTCKq07bnF8MgCFYo1JgodPHEKew"/>
            </div> 

          <div className="navBar">
           <ul>
             <li onClick{() => this.addBackHandler()}<button>Home</button>/li>
             <li onClick{() => this.addPicClickHandler()}<button>Upload New Photo</button></li>  
            </ul>
           </div>
          </div>
          
          <div className="imageSquares">{this.props.photos.map(this.processData)}
          </div>

          <div className="footer">
           <p>My Name Year</p>
          </div>
      </div>  

     );
    }
   });   





    