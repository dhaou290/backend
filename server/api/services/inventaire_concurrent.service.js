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

  create(ean, libellé_du_produit, prix) {
    return client.query(
      "INSERT INTO inventaire_concurrent (ean, libellé_du_produit, prix) VALUES ('" +
        ean +
        "', '" +
        libellé_du_produit +
        "', '" +
        prix +
        "');"
    );
  }
}

export default new Inventaire_concurrentService();
