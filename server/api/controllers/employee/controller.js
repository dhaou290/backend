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
    EmployeeService.create(req.body.id, req.body.nom).then((r) =>
      res.status(201).json(r.rowCount)
    );
  }
}
export default new Controller();
