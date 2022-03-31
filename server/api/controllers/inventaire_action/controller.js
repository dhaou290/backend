import Inventaire_actionService from '../../services/inventaire_action.service';

export class Controller {
  all(req, res) {
    Inventaire_actionService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    Inventaire_actionService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    Inventaire_actionService.create(
      req.body.id,
      req.body.lieu,
      req.body.magasin
    ).then((r) => res.status(201).json(r.rowCount));
  }
}
export default new Controller();
