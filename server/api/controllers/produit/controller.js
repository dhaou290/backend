import ProduitService from '../../services/produit.service';

export class Controller {
  all(req, res) {
    ProduitService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    ProduitService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    ProduitService.create(
      req.body.labelle,
      req.body.codeEAN,
      req.body.notre_prix
    ).then((r) => res.status(201).json(r.rowCount));
  }
}
export default new Controller();
