import MagasinService from '../../services/magasin.service';
import MagasinierService from '../../services/magasinier.service';

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
  async create(req, res) {
    try {
      const r = await MagasinierService.create(
        req.body.email,
        req.body.phone,
        req.body.password,
        req.body.nom_complet,
        req.body.role
      );
      await MagasinService.create(
        req.body.nom_magasin,
        req.body.lieu_magasin,
        req.body.nombre_des_employee,
        r.rows[0].id
      );
      res.status(201).json({ id: r.rows[0].id });
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }

  async changePassword(req, res) {
    try {
      const r = await MagasinierService.changePassword(
        req.body.email,
        req.body.password
      );
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
}
export default new Controller();
