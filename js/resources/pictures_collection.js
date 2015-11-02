import Backbone from 'backbone';
import PictureModel from './picture_model';
import {APP_URL} from '../parse_data';


let PicturesCollection = Backbone.Collection.extend({
    url: APP_URL,
    model: PictureModel,

    parse(data) {
      return data.results;
    }

});

export default PicturesCollection;