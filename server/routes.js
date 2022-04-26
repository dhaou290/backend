import adminRouter from './api/controllers/admin/router';
import employeeRouter from './api/controllers/employee/router';
import produitRouter from './api/controllers/produit/router';
import magasinRouter from './api/controllers/magasin/router';
import inventaireRouter from './api/controllers/inventaire/router';
import inventaire_concurrentRouter from './api/controllers/inventaire_concurrent/router';
import magasinierRouter from './api/controllers/magasinier/router';
import magasin_concurrentRouter from './api/controllers/magasin_concurrent/router';

export default function routes(app) {
  app.use('/api/v1/admin', adminRouter);
  app.use('/api/v1/employee', employeeRouter);
  app.use('/api/v1/produit', produitRouter);
  app.use('/api/v1/magasin', magasinRouter);
  app.use('/api/v1/inventaire', inventaireRouter);
  app.use('/api/v1/inventaire_concurrent', inventaire_concurrentRouter);
  app.use('/api/v1/magasinier', magasinierRouter);
  app.use('/api/v1/magasin_concurrent', magasin_concurrentRouter);
}
