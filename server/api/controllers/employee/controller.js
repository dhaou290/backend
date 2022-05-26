import EmployeeService from '../../services/employee.service';
import MagasinierService from '../../services/magasinier.service';

import md5 from 'md5';

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

  bymagasin(req, res) {
    EmployeeService.bymagasin(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  async create(req, res) {
    try {
      const r = await EmployeeService.create(
        req.body.email,
        req.body.phone,
        md5(req.body.password),
        req.body.nom_complet,
        req.body.magasin_id,
        'employee'
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
        md5(req.body.password)
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
          md5(req.body.password)
        );
        res
          .status(200)
          .json({ role: r1.rows[0].role, magasin_id: r1.rows[0].magasin_id });
        return;
        // eslint-disable-next-line no-empty
      } catch (e) {}
      const r = await MagasinierService.login(
        req.body.email,
        md5(req.body.password)
      );
      res
        .status(200)
        .json({ role: r.rows[0].role, magasin_id: r.rows[0].magasin_id });
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async changePhone(req, res) {
    try {
      await EmployeeService.changePhone(req.body.email, req.body.phone);
      res.status(201).json(true);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async delete(req, res) {
    try {
      await EmployeeService.delete(req.params.id);
      res.status(201).json(true);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async changenome(req, res) {
    try {
      await EmployeeService.changenom_complet(
        req.body.email,
        req.body.nom_complet
      );
      res.status(201).json(true);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
}
export default new Controller();
