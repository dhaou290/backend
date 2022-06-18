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

  create(codeean, libellé_du_produit, prix, id_magasin_concurrent) {
    return client.query(
      "INSERT INTO inventaire_concurrent (codeean, libellé_du_produit, prix, id_magasin_concurrent) VALUES ('" +
        codeean +
        "', '" +
        libellé_du_produit +
        "', '" +
        prix +
        "','" +
        id_magasin_concurrent +
        "');"
    );
  }
}

export default new Inventaire_concurrentService();
