import UtilisateurService from '../../services/utilisateur.service';

export class Controller {
  all(req, res) {
    UtilisateurService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    UtilisateurService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  create(req, res) {
    UtilisateurService.create(
      req.body.id,
      req.body.nom,
      req.body.prenom
    ).then((r) =>
      res.status(201).json(r.rowCount)
    );
  }
}
export default new Controller();
