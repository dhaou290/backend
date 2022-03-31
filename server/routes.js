import compteRouter from './api/controllers/compte/router';
import employeeRouter from './api/controllers/employee/router';
import produitRouter from './api/controllers/produit/router';
import utilisateurRouter from './api/controllers/utilisateur/router';
import magasinRouter from './api/controllers/magasin/router';
import dateRouter from './api/controllers/date/router';
import date_actionRouter from './api/controllers/date_action/router';
import inventaireRouter from './api/controllers/inventaire/router';
import inventaire_actionRouter from './api/controllers/inventaire_action/router';

export default function routes(app) {
  app.use('/api/v1/compte', compteRouter);
  app.use('/api/v1/employee', employeeRouter);
  app.use('/api/v1/produit', produitRouter);
  app.use('/api/v1/utilisateur', utilisateurRouter);
  app.use('/api/v1/magasin', magasinRouter);
  app.use('/api/v1/date', dateRouter);
  app.use('/api/v1/date_action', date_actionRouter);
  app.use('/api/v1/inventaire', inventaireRouter);
  app.use('/api/v1/inventaire_action', inventaire_actionRouter);
}
