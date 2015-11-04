import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import _ from 'underscore';

import PictureModel from './resources/picture_model';
import PicturesCollection from './resources/pictures_collection';
import HomeView from './views/home_view';
import LoneView from './views/lone_view';
import EditView from './views/edit_view';
import Spinner from './views/spinner';
import AddNewView from './views/addNew_view';

export default Backbone.Router.extend({

    routes: {
      ""          : "showHome",
      "lone/:id"  : "showLoneView",
      "addNew"    : "showAddNewPictures",
      "edit/:id"  : "showEditPictures"
    },

    initialize(appElement) {
        this.el = appElement;
        this.collection = new PicturesCollection();
        this.model = new PictureModel();
    },

    goto(route) {
      this.navigate(route, {
        trigger: true
      });

    },

    render(component) {
      ReactDom.render(component, this.el);
    },

    showHome() {
      this.collection.fetch().then(() => {
        console.log(this.collection.toJSON());
        this.render(<HomeView
          pictures={this.collection.toJSON()}
          onBackClick={() => this.goto('')}
          onLonePicClick={(id) => this.goto('lone/' + id)}
          onAddClick={() => this.goto('addNew')}/>
     );     
        
    });
   },
    
    showLoneView(id) {
      let solo = this.collection.get(id);
      console.log(solo);
      
      if (solo) {
        this.render(
          <LoneView
           onAddClick={() => this.goto('addNew')}
           onBackClick={() => this.goto('')}
           onEditClick={() => this.goto('editImages/' + id)}
           images={solo.toJSON()}/>
        );   
      } else {
        solo = this.image.add({objectId: id});
        solo.fetch().then(() => {
          this.render(
            <LoneView
            onAddClick={() => this.goto('addNew')}
            onBackClick={() => this.goto('')}
            onEditClick={() => this.goto('editImage/' + id)}
            images={solo.toJSON()}/>
        );
      });
    }

},

    showAddNewPictures() {
      this.render(<AddNewView
           onAddClick={() => this.goto('addNew')}
           onBackClick={() => this.goto('')}
           onUploadClick={() => {
             let newTitle = document.querySelector('.giveTitle').value;
             let newPhotos = document.querySelector('.givePhotos').value;
             let newDescription = document.querySelector('.giveDescription').value;
             let newUpload = new PictureModel ({
              Title: newTitle,
              Description: newDescription,
              Photos: newPhotos
            });

             newUpload.save();
             this.goto('');
            } 
         }/>
        );
       },  

    showEditPictures(id) {
      //let peanutButter = id;
        this.render(<EditView
          onAddClick={() => this.goto('addNew')}
          onBackClick={(id) => this.goto('')}
          onSaveClick={(id) => {
            let newTitle = document.querySelector('.giveTitle').value;
            let newDescription = document.querySelector('.giveDescription').value;
            let newPhotos = document.querySelector('.givePhotos').value;
            let editUpload = new PictureModel ({
              objectId: peanutButter,
              //Title: newTitle,
              //Description: newDescription,
              //Photos: new Photos 
            });  
          }
         }/>
        );
      },

     start() {
      Backbone.history.start();
     }    
});
   
           
  


    

