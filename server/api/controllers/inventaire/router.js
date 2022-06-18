import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .post('/changePrix', controller.changePrix)
  .get('/', controller.all)
  .get('/bymagasin/:id', controller.bymagasin)
  .post('/benchmark', controller.benchmark)
  .get('/:id', controller.byId);
