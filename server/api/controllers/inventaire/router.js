import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .post('/changePrix', controller.changePrix)
  .get('/', controller.all)
  .get('/benchmark/:codeean', controller.benchmark)
  .get('/:id', controller.byId);
