import React from 'react';
import ReactDom from 'react-dom';
import Router from './router';
import './ajax_setup';

let appElement = document.querySelector('.app');

var router = new Router(appElement);
router.start();