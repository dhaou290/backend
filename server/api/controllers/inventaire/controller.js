import InventaireService from '../../services/inventaire.service';
import ProduitService from '../../services/produit.service';

export class Controller {
  all(req, res) {
    InventaireService.all().then((r) => res.json(r.rows));
  }

  byId(req, res) {
    InventaireService.byId(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }

  async changePrix(req, res) {
    try {
      const r = await InventaireService.changePrix(
        req.body.codeean,
        req.body.magasin_id,
        req.body.prix
      );
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      console.log(e);
      res.status(200).json(false);
    }
  }
  async benchmark(req, res) {
    try {
      const r = await InventaireService.benchmark(req.body.codeean);
      res.json(r.rows);
    } catch (e) {
      console.log(e);
    }
  }
  async create(req, res) {
    try {
      try {
        await ProduitService.create(req.body.labelle, req.body.codeean);
        // eslint-disable-next-line no-empty
      } catch (e) {
        console.log(e);
      }
      const r = await InventaireService.create(
        req.body.codeean,
        req.body.prix,
        req.body.quantite,
        req.body.magasin_id
      );
      res.status(201).json(r.rowCount > 0);
    } catch (e) {
      res.status(200).json(false);
    }
  }

  bymagasin(req, res) {
    InventaireService.bymagasin(req.params.id).then((r) => {
      if (r) res.json(r.rows);
      else res.status(404).end();
    });
  }
}
export default new Controller();
