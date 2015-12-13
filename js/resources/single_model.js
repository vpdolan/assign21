import Backbone from 'backbone';
import {APP_URL} from '../parse_data.js';

let SingleModel = Backbone.Model.extend({
    urlRoot: APP_URL,
    
    idAttribute:  'objectId',

    templateData() {
      let data = this.toJSON();
        return data;
    }

});

export default SingleModel;