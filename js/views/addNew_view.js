import React from 'react';

let AddNewView = Reach.createClass({
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
    return 
  <div className="newPicView">

     <div className="header">

      <img src="http://www.google.com/imgres?imgurl=http://previews.123rf.com/images/samot/samot1401/samot140100048/25407508-White-wine-with-barrel-on-vineyard-in-Chianti-Tuscany-Italy-Stock-Photo.jpg&imgrefurl=http://www.123rf.com/photo_25407508_white-wine-with-barrel-on-vineyard-in-chianti-tuscany-italy.html&h=866&w=1300&tbnid=RWymPDoaRmmeIM:&docid=EahAzMUPrjI7WM&ei=TbY2VurZK4rrmAG84qnYBw&tbm=isch&ved=0CDAQMygPMA9qFQoTCKq07bnF8MgCFYo1JgodPHEKew"/>

      </div>

     <div className="navBar">
      <ul>
       <li onClick{() => this.addBackHandler()}<button>Home</button>/li>         
       <li onClick{() => this.addPicClickHandler()}<button>Upload New Photo</button></li>        
      </ul>       
     </div>


     <form className="newPicForm">
       input type="text" placeholder="Title:" className="giveTitle"></input>
       input type="text" placeholder="Photo URL:" className="givePhoto"></input>
       <textarea type="text" placeholder="Description:" className="giveDescription" min="35" max="75"></textarea>
     </form>
     
     
     <div className="usersubmits">
      <button onClick={() => this.addBackHandler()}>Cancel</button>
      <button onClick={() => this.addUploadHandler()}>Upload Photo</button>
     </div>
     
     <div className="footer">
       <p>My Name Year</p>
     </div>
     
  </div>

  );
 }
});

export default AddNewView; 