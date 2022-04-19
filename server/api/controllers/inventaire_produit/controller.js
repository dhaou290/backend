import Inventaire_concurrentService from '../../services/inventaire_concurrent.service';

export class Controller {
  all(req, res) {
    Inventaire_concurrentService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    Inventaire_concurrentService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    Inventaire_concurrentService.create(
      req.body.date,
      req.body.lieu,
      req.body.nom_du_produit,
      req.body.ean,
      req.body.libellé_du_produit,
      req.body.quantite
    ).then((r) => res.status(201).json(r.rowCount));
  }
}
export default new Controller();
