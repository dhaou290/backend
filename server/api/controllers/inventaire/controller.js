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
    InventaireService.create(req.body.id_inventaire).then((r) =>
      res.status(201).json(r.rowCount)
    );
  }
}
export default new Controller();
