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

  create(req, res) {
    MagasinService.create(
      req.body.id,
      req.body.nom_magasin,
      req.body.lieu_magasin
    ).then((r) =>
      res.status(201).location(`/api/v1/magasin/${r.id}`).json(r.rowCount)
    );
  }
}
export default new Controller();