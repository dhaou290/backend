import MagasinService from '../../services/magasin.service';
import MagasinierService from '../../services/magasinier.service';

import md5 from 'md5';

export class Controller {
  all(req, res) {
    MagasinierService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    MagasinierService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  bymagasin(req, res) {
    MagasinierService.bymagasin(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  async create(req, res) {
    try {
      const r = await MagasinService.create(
        req.body.nom_magasin,
        req.body.lieu_magasin,
        req.body.admin_id
      );
      const r1 = await MagasinierService.create(
        req.body.email,
        req.body.phone,
        md5(req.body.password),
        req.body.nom_complet,
        'magasinier',
        r.rows[0].id
      );
      res.status(201).json({
        magasin_id: r1.rows[0].magasin_id,
        email: r1.rows[0].email,
        role: r1.rows[0].role,
      });
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }

  async createbymagasinid(req, res) {
    try {
      const r1 = await MagasinierService.create(
        req.body.email,
        req.body.phone,
        md5(req.body.password),
        req.body.nom_complet,
        'magasinier',
        req.body.magasin_id
      );
      res.status(201).json({
        magasin_id: r1.rows[0].magasin_id,
        email: r1.rows[0].email,
        role: r1.rows[0].role,
      });
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }

  async changePassword(req, res) {
    try {
      await MagasinierService.changePassword(
        req.body.email,
        md5(req.body.password)
      );
      res.status(201).json(true);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async changePhone(req, res) {
    try {
      await MagasinierService.changePhone(req.body.email, req.body.phone);
      res.status(201).json(true);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async changenome(req, res) {
    try {
      await MagasinierService.changenom_complet(
        req.body.email,
        req.body.nom_complet
      );
      res.status(201).json(true);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async delete(req, res) {
    try {
      const r = await MagasinierService.delete(req.params.id);
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
}
export default new Controller();
