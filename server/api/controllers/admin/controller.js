import AdminService from '../../services/admin.service';

export class Controller {
  all(req, res) {
    AdminService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    AdminService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    AdminService.create(
      req.body.email,
      req.body.phone,
      req.body.password,
      req.body.nom_complet
    ).then((r) => res.status(201).json(r.rowCount));
  }
  login(req, res) {
    AdminService.login(req.body.email, req.body.password).then((r) =>
      res.status(200).json(r.rowCount > 0)
    );
  }
}
export default new Controller();
