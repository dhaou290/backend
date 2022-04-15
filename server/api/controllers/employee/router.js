import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .post('/login', controller.login)
  .get('/', controller.all)
  .get('/:id', controller.byId);
