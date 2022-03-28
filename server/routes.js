import compteRouter from './api/controllers/compte/router';
import employeeRouter from './api/controllers/employee/router';
import produitRouter from './api/controllers/produit/router';
import utilisateurRouter from './api/controllers/utilisateur/router';
import magasinRouter from './api/controllers/magasin/router';


export default function routes(app) {
  app.use('/api/v1/compte', compteRouter);
  app.use('/api/v1/employee', employeeRouter);
  app.use('/api/v1/produit', produitRouter);
  app.use('/api/v1/utilisateur', utilisateurRouter);
  app.use('/api/v1/magasin', magasinRouter);
}
