import Backbone from 'backbone';
import SingleModel from './single_model';
import {APP_URL} from '../parse_data';


let PicturesCollection = Backbone.Collection.extend({
    url: APP_URL,
    model: SingleModel,

    parse(data) {
      return data.results;
    }

});

export default PicturesCollection;