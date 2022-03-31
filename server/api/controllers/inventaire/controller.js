import InventaireService from '../../services/inventaire.service';

export class Controller {
  all(req, res) {
    CompteService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    InventaireService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    InventaireService.create(
      req.body.id,
      req.body.id_inventaire
    ).then((r) =>
      res.status(201).location(`/api/v1/inventaire/${r.id}`).json(r.rowCount)
    );
  }
}
export default new Controller();
