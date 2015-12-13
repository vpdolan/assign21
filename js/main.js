import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import React from 'react';
import ReactDom from 'react-dom';
import './ajax_setup';
import Router from './router';

let appElement = document.querySelector('.app');

var router = new Router(appElement);
router.start();