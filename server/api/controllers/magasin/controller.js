import MagasinService from '../../services/magasin.service';

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
        req.body.lieu_magasin
      );
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      res.status(200).json(false);
    }
  }
}
export default new Controller();
