import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .get('/', controller.all)
  .post('/changenom_magasin', controller.changenom_magasin)
  .delete('/delete/:id', controller.delete)
  .post('/changelieu_magasin', controller.changelieu_magasin)
  .get('/byadmin/:id', controller.byadmin)
  .get('/:id', controller.byId);
