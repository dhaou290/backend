import EmployeeService from '../../services/employee.service';

export class Controller {
  all(req, res) {
    EmployeeService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    EmployeeService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    EmployeeService.create(
      req.body.email,
      req.body.phone,
      req.body.password,
      req.body.nom_complet,
      req.body.nom_magasin,
      req.body.lieu_magasin
    ).then((r) => res.status(201).json(r.rowCount));
  }

  login(req, res) {
    EmployeeService.login(req.body.email, req.body.password).then((r) =>
      res.status(200).json(r.rowCount > 0)
    );
  }
}
export default new Controller();
