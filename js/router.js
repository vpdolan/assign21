import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import _ from 'underscore';
import './ajax_setup';

import SingleModel from './resources/single_model';
import PicturesCollection from './resources/pictures_collection';
import HomeView from './views/home_view';
import SingleView from './views/single_view';
import EditView from './views/edit_view';
import Spinner from './views/spinner';
import AddView from './views/add_view';

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
    
  goto(route){
    this.navigate(route, {trigger: true});
  },

//Home-View Route

  home(){
    this.collection.fetch().then(() => {
      this.render(
          <HomeView
           id={this.collection.objectId}
           onImageSelect={(id) => this.goto('Single/' + id)}
           data={this.collection.toJSON()}
           AddBtnClick={() => this.goto('addForm')}/>);
     });         
  },

//Single-View Route

  showSingle(id){
    let photos = this.collection.get(id);

    if (photos) {
      this.render (
        <SingleView
        data={photos.toJSON()}
        editBtnClick={ (id) => this.goto('editForm/' + id)}
        homeBtnClick={ () => this.goto('')}/>);
    }

    else {
      photos = this.collection.add({objectId : id});
      photos.fetch().then ( () => {
        this.render(<SingleView
          data={photos.toJSON()}
          editBtnClick={ (id) => this.goto('editForm/' + id)}
          homeBtnClick={ () => this.goto('')}/>);
      });
    }
  },

//Edit-View Route

  showformEdit(id){
    let getinfo = this.collection.get(id);
    
    if(getinfo) {
      console.log('x', getinfo.toJSON());
      this.render(<EditView
        homeBtnClick={() => this.goto('')}
        data={getinfo.toJSON()}
        saveBtnClick={(id,Title,Photos,Terrior,Food,ServeTemp,Description) => 
          this.saveEditedData(id,Title,Photos,Terrior,Food,ServeTemp,Description)}/>);
    }

    else {
      getinfo = this.collection.add({objectId : id});
      getinfo.fetch().then( () => {
        console.log('y', getinfo.toJSON());
        this.render(<EditView
          homeBtnClick={() => this.goto('')}
          data={getinfo.toJSON()}
          saveBtnClick={(id,Title,Photos,Terrior,Food,ServeTemp,Description) => 
          this.saveEditedData(id,Title,Photos,Terrior,Food,ServeTemp,Description)}/>);
      })
    }
    console.log('logging to JSON', getinfo.toJSON());
  },

//Updating Edits Route

  saveEditedData(id,Title,Photos,Terrior,Food,ServeTemp,Description) {
    this.collection.get(id).save({
      objectId     :  id,
      Title        :  Title,
      Photos       :  Photos,
      Terrior      :  Terrior,
      Food         :  Food,
      ServeTemp    :  ServeTemp,
      Description  :  Description
    }).then( () => {
      alert('Changes Updated');
      this.goto('');      
    });
  },

//Add-View Route

  showformAdd() {
    this.render(<AddView
      data={this.collection.toJSON()}
      homeBtnClick={() => this.goto('')}
      saveBtnClick={() => {
        let newUserTitle = document.querySelector('.title').value;
        let newUserPhotos = document.querySelector('.photos').value;
        let newUserTerrior = document.querySelector('.terrior').value;
        let newUserFood = document.querySelector('.food').value;
        let newUserServeTemp = document.querySelector('.servetemp').value;
        let newUserDescription = document.querySelector('.description').value;
        console.log('new user', newUserTitle);

        let model = new SingleModel ({
          Title        :  newUserTitle,
          Photos       :  newUserPhotos,
          Terrior      :  newUserTerrior,
          Food         :  newUserFood,
          ServeTemp    :  Number(newUserServeTemp),
          Description  :  newUserDescription     
        });

        model.save().then ( () => {
          alert('Your Selection Has Been Added. Thank you!');
          this.goto('');

        });  
      }
    }/>);  
  }  
});
export default Router;
   
           
  


    

