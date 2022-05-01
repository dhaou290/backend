import InventaireService from '../../services/inventaire.service';

export class Controller {
  all(req, res) {
    InventaireService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    InventaireService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    InventaireService.create(
      req.body.labelle,
      req.body.codeEAN,
      req.body.notre_prix,
      req.body.quantite
    ).then((r) => res.status(201).json(r.rowCount));
  }
}
export default new Controller();
