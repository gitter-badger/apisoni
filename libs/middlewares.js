import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';

module.exports = app => {
  app.set('port', 3000);
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(express.static('public'));
};
