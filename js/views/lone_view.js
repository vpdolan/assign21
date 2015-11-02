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
return (
  <div className="lonePicPage" key={this.props.photos.objectId}>

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

       <div className="singlesquare">
        <img className="singleimage" src={this.props.photos.PhotoLink}/> 
       </div>
       
       <div className="photodescription">

         <div className="title">{this.props.photos.Title}
         </div>
         <div className="description">{this.props.photos.Description}
         </div>

       <div className="navBarBtns">
         <button onClick={() => this.addBackHandler()}>Back Home</button>  
         <button onClick={() => this.addEditHandler()}>EditSubmission</button> 
       </div>
      </div>
     
      <div className="footer">
        <p>My Name Year</p>
      </div>
      
    </div>
   </div>
   
   );
  }
 });   
            

             

  }  
  }  
  }
})