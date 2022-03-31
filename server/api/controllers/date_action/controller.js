import Date_actionService from '../../services/date_action.service';

export class Controller {
  all(req, res) {
    Date_actionService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    Date_actionService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    Date_actionService.create(
      req.body.id,
      req.body.heure,
      req.body.jour,
      req.body.mois,
      req.body.année
    ).then((r) =>
      res.status(201).location(`/api/v1/compte/${r.id}`).json(r.rowCount)
    );
  }
}
export default new Controller();
