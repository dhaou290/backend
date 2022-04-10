import Inventaire_produitService from '../../services/inventaire_produit.service';

export class Controller {
  all(req, res) {
    Inventaire_produitService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    Inventaire_produitService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    Inventaire_produitService.create(
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
