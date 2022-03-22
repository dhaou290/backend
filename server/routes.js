import compteRouter from './api/controllers/compte/router';
import employeeRouter from './api/controllers/employee/router';
import produitRouter from './api/controllers/produit/router';

export default function routes(app) {
  app.use('/api/v1/compte', compteRouter);
  app.use('/api/v1/employee', employeeRouter);
  app.use('/api/v1/produit', produitRouter);
}
