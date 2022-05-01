import MagasinierService from '../../services/magasinier.service';

export class Controller {
  all(req, res) {
    MagasinierService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    MagasinierService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    MagasinierService.create(
      req.body.email,
      req.body.phone,
      req.body.password,
      req.body.nom_complet,
      req.body.nom_magasin,
      req.body.lieu_magasin,
      req.body.role
    ).then((r) => res.status(201).json(r.rowCount));
  }
}
export default new Controller();
