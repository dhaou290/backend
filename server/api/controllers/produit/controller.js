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

  async create(req, res) {
    try {
      const r = await ProduitService.create(req.body.labelle, req.body.codeean);
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      res.status(200).json(false);
    }
  }
}
export default new Controller();
