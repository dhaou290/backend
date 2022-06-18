import MagasinService from '../../services/magasin.service';
import md5 from 'md5';
export class Controller {
  all(req, res) {
    MagasinService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    MagasinService.byId(req.params.id).then((r) => {
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
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      res.status(200).json(false);
    }
  }
  byadmin(req, res) {
    MagasinService.byadmin(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  async changeNom_magasin(req, res) {
    try {
      const r = await MagasinService.changeNom_magasin(
        req.body.magasin_id,
        md5(req.body.nom_magasin)
      );
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async changeLieu_magasin(req, res) {
    try {
      const r = await MagasinService.changeLieu_magasin(
        req.body.magasin_id,
        md5(req.body.lieu_magasin)
      );
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }

  async delete(req, res) {
    try {
      const r = await MagasinService.delete(req.params.id);
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }

  async changenom_magasin(req, res) {
    try {
      await MagasinService.changenom_magasin(
        req.body.nom_magasin,
        req.body.magasin_id
      );
      res.status(201).json(true);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }

  async changelieu_magasin(req, res) {
    try {
      await MagasinService.changelieu_magasin(
        req.body.lieu_magasin,
        req.body.magasin_id
      );
      res.status(201).json(true);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
}
export default new Controller();
