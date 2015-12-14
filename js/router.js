import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import './ajax_setup';
import $ from 'jquery';

import HomeView from './views/home_view';
import SingleView from './views/single_view';
import EditView from './views/edit_view';
import AddView from './views/add_view';
import Spinner from './views/spinner';

import SingleModel from './resources/single_model';
import PicturesCollection from './resources/pictures_collection';

let Router = Backbone.Router.extend({

  routes: {
    ""              : "home",
    "Single/:id"    : "showSingle",
    "addForm"       : "showformAdd",
    "editForm/:id"  : "showformEdit"
  },

  initialize(appElement) {
    this.el = appElement;
    this.collection = new PicturesCollection();
    this.model = new SingleModel();
  },

  start() {
    Backbone.history.start();
    return this;
  },  

  render(component) {
    ReactDom.render(component, this.el);
  },
    
  goto(route) {
    this.navigate(route, {trigger: true});
  },

//Home-View Route

  home() {
    this.collection.fetch().then(() => {
      this.render(
          <HomeView
           id={this.collection.objectId}
           onImageSelect={(id) => this.goto("Single/" + id)}
           data={this.collection.toJSON()}
           AddBtnClick={() => this.goto("addForm")}/>);
     });         
  },

//Single-View Route

  showSingle(id){
    let photo = this.collection.get(id);

    if (photo) {
      this.render (
        <SingleView
        data={photo.toJSON()}
        editBtnClick={ (id) => this.goto("editForm/" + id)}
        homeBtnClick={ () => this.goto("")}/>);
    }

    else {
      photo = this.collection.add({objectId : id});
      photo.fetch().then ( () => {
        this.render(<SingleView
          data={photo.toJSON()}
          editBtnClick={ (id) => this.goto("editForm/" + id)}
          homeBtnClick={ () => this.goto("")}/>);
      });
    }
  },

//Edit-View Route

  showformEdit(id){
    let getinfo = this.collection.get(id);
    
    if(getinfo) {
      console.log('A', getinfo.toJSON());
      this.render(<EditView
        homeBtnClick={() => this.goto("")}
        data={getinfo.toJSON()}
        saveBtnClick={(id,Title,Photos,Terroir,Food,Temp,Description) => 
          this.saveEditedData(id,Title,Photos,Terroir,Food,Temp,Description)}/>);
    }

    else {
      getinfo = this.collection.add({objectId : id});
      getinfo.fetch().then(() => {
        console.log('B', getinfo.toJSON());
        this.render(<EditView
          homeBtnClick={() => this.goto("")}
          data={getinfo.toJSON()}
          saveBtnClick={(id,Title,Photos,Terroir,Food,Temp,Description) => 
          this.saveEditedData(id,Title,Photos,Terroir,Food,Temp,Description)}/>);
      })
    }
  },

//Updating Edits Route

  saveEditedData(id,Title,Photos,Terroir,Food,Temp,Description) {
    this.collection.get(id).save({
      objectId     :  id,
      Title        :  Title,
      Photos       :  Photos,
      Terroir      :  Terroir,
      Food         :  Food,
      Temp         :  Temp,
      Description  :  Description
    }).then(() => {
      alert('Changes Updated');
      this.goto("");      
    });
  },

//Add-View Route

  showformAdd() {
    this.render(<AddView
      data={this.collection.toJSON()}
      homeBtnClick={() => this.goto("")}
      saveBtnClick={() => {
        let newUserTitle = document.querySelector('.wineTitle').value;
        let newUserPhotos = document.querySelector('.photos').value;
        let newUserTerroir = document.querySelector('.terroir').value;
        let newUserFood = document.querySelector('.food').value;
        let newUserTemp = document.querySelector('.temp').value;
        let newUserDescription = document.querySelector('.description').value;
        console.log('new user', newUserTitle);

        let model = new SingleModel ({
          Title        :  newUserTitle,
          Photos       :  newPhotos,
          Terroir      :  newUserTerroir,
          Food         :  newUserFood,
          Temp         :  newUserTemp,
          Description  :  newUserDescription     
        });
        console.log('new selection?');

        model.save().then(() => {
          alert('Your Selection Has Been Added. Thank you!');
          this.goto("");

        });  
      }
    }/>);  
  }  
});
export default Router;
   
           
  


    

