import HistoriqueService from '../../services/historique.service';

export class Controller {
  all(req, res) {
    HistoriqueService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    HistoriqueService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    HistoriqueService.create(
      req.body.id,
      req.body.type_inventaire,
      req.body.lieu_inventaire,
      req.body.date_inventaire,
      req.body.quantite
    ).then((r) => res.status(201).json(r.rowCount));
  }
}
export default new Controller();
