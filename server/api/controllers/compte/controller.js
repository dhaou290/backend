import CompteService from '../../services/compte.service';

export class Controller {
  all(req, res) {
    CompteService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    CompteService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    CompteService.create(
      req.body.id,
      req.body.email,
      req.body.phone,
      req.body.password
    ).then((r) => res.status(201).json(r.rowCount));
  }
  login(req, res) {
    CompteService.login(req.body.email, req.body.password).then((r) =>
      res.status(200).json(r.rowCount > 0)
    );
  }
}
export default new Controller();
