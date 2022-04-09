import Inventaire_prixService from '../../services/Inventaire_prix.service';

export class Controller {
  all(req, res) {
    Inventaire_prixService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    Inventaire_prixService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    Inventaire_prixService.create(
      req.body.id,
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
