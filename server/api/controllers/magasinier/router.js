import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.create)
  .post('/magasinierbymagasin', controller.createbymagasinid)
  .post('/changePassword', controller.changePassword)
  .post('/changePhone', controller.changePhone)
  .delete('/delete/:id', controller.delete)
  .post('/changeNom_complet', controller.changenome)
  .get('/', controller.all)
  .get('/:id', controller.byId)
  .get('/bymagasin/:id', controller.bymagasin);
