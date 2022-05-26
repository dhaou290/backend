import AdminService from '../../services/admin.service';
import md5 from 'md5';

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
  async changePassword(req, res) {
    try {
      const r = await AdminService.changePassword(
        req.body.email,
        md5(req.body.password)
      );
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async create(req, res) {
    try {
      const r = await AdminService.create(
        req.body.email,
        req.body.phone,
        md5(req.body.password),
        req.body.nom_complet,
        req.body.role
      );
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      res.status(200).json(false);
    }
  }
  async login(req, res) {
    try {
      const r = await AdminService.login(
        req.body.email,
        md5(req.body.password)
      );
      res.status(200).json({ id: r.rows[0].id });
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async changePhone(req, res) {
    try {
      await AdminService.changePhone(req.body.email, req.body.phone);
      res.status(201).json(true);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async changenome(req, res) {
    try {
      await AdminService.changenom_complet(
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
