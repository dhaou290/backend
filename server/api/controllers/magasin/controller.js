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
      req.body.nom_magasin, 
      req.body.lieu_magasin,
      req.body.nombre_des_magasin,
      req.body.magasinier_id
      ).then(
      (r) => res.status(201).json(r.rowCount)
    );
  }
}
export default new Controller();
