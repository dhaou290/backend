import { client } from '../../config/db.config';

class Inventaire_concurrentService {
  all() {
    return client.query('SELECT * FROM inventaire_concurrent;');
  }

  byId(id) {
    return client.query(
      'SELECT * FROM inventaire_concurrent where id=' + id + ';'
    );
  }

  create(date, lieu, nom_du_magasin, ean, libellé_du_produit, quantite) {
    return client.query(
      "INSERT INTO inventaire_concurrent (date, lieu, nom_du_magasin, ean, libellé_du_produit, quantite) VALUES ('" +
      date +
      "', '" +
      lieu +
      "', '" +
      nom_du_magasin +
      "', '" +
      ean +
      "', '" +
      libellé_du_produit +
      "', '" +
      quantite +
      "');"
    );
  }
}

export default new Inventaire_concurrentService();
