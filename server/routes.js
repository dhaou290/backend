import compteRouter from './api/controllers/compte/router';
import employeeRouter from './api/controllers/employee/router';
import produitRouter from './api/controllers/produit/router';
import magasinRouter from './api/controllers/magasin/router';
import inventaireRouter from './api/controllers/inventaire/router';
import inventaire_produitRouter from './api/controllers/inventaire_produit/router';
import magasinierRouter from './api/controllers/magasinier/router';


export default function routes(app) {
  app.use('/api/v1/compte', compteRouter);
  app.use('/api/v1/employee', employeeRouter);
  app.use('/api/v1/produit', produitRouter);
  app.use('/api/v1/magasin', magasinRouter);
  app.use('/api/v1/inventaire', inventaireRouter);
  app.use('/api/v1/inventaire_produit', inventaire_produitRouter);
  app.use('/api/v1/magasinier', magasinierRouter);
  
}
