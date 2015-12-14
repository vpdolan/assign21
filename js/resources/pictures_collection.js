import Backbone from 'backbone';
import SingleModel from './single_model';
import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({
  
  url: APP_URL,
  
  model: SingleModel,

  parse(data) {
    return data.results;
    }

});

