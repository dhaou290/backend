import Magasin_concurrentService from '../../services/magasin_concurrent.service';

export class Controller {
  all(req, res) {
    Magasin_concurrentService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    Magasin_concurrentService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  async create(req, res) {
    try {
      const r = await Magasin_concurrentService.create(
        req.body.nom,
        req.body.lieu
      );
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      res.status(200).json(false);
    }
  }
}

export default new Controller();
