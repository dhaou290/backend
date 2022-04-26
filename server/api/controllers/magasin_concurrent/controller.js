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

  create(req, res) {
    Magasin_concurrentService.create(req.body.nom, req.body.lieu).then((r) =>
      res.status(201).json(r.rowCount)
    );
  }
}
export default new Controller();
