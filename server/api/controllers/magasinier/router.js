import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .post('/changePassword', controller.changePassword)
  .get('/', controller.all)
  .get('/:id', controller.byId);
