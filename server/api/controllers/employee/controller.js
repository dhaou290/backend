import EmployeeService from '../../services/employee.service';
import MagasinService from '../../services/magasin.service';
import MagasinierService from '../../services/magasinier.service';

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

  async create(req, res) {
    try {
      const r = await EmployeeService.create(
        req.body.email,
        req.body.phone,
        req.body.password,
        req.body.nom_complet,
        req.body.magasin_id,
        req.body.role
      );
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      res.status(200).json(false);
    }
  }
  async changePassword(req, res) {
    try {
      const r = await EmployeeService.changePassword(
        req.body.email,
        req.body.password
      );
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async login(req, res) {
    try {
      try {
        const r1 = await EmployeeService.login(
          req.body.email,
          req.body.password
        );
        res
          .status(200)
          .json({ role: r1.rows[0].role, magasin_id: r1.rows[0].magasin_id });
        return;
        // eslint-disable-next-line no-empty
      } catch (e) {}
      const r = await MagasinierService.login(
        req.body.email,
        req.body.password
      );
      const r2 = await MagasinService.byMagasinierId(r.rows[0].id);
      res.status(200).json({ role: r.rows[0].role, magasin_id: r2.rows[0].id });
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
}
export default new Controller();
