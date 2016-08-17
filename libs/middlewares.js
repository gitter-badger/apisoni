import bodyParser from 'body-parser';
import express from 'express';

module.exports = app => {
  app.set('port', 3000);
  app.use(bodyParser.json());
  app.use(express.static('public'));
};
