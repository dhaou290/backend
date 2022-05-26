import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .post('/changePassword', controller.changePassword)
  .post('/changePhone', controller.changePhone)
  .post('/changeNom_complet', controller.changenome)
  .post('/login', controller.login)
  .get('/', controller.all)
  .get('/bymagasin/:id', controller.bymagasin)
  .get('/:id', controller.byId);
