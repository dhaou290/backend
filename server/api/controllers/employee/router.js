import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .post('/changePassword', controller.changePassword)
  .post('/login', controller.login)
  .get('/', controller.all)
  .get('/:id', controller.byId);
