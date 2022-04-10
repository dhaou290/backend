import { client } from '../../config/db.config';

class Inventaire_produitService {
  all() {
    return client.query('SELECT * FROM inventaire_produit;');
  }

  byId(id) {
    return client.query(
      'SELECT * FROM inventaire_produit where id=' + id + ';'
    );
  }

  create(id, date, lieu, nom_du_magasin, ean, libellé_du_produit, quantite) {
    return client.query(
      "INSERT INTO inventaire_produit (id, date, lieu, nom_du_magasin, ean, libellé_du_produit, quantite) VALUES ('"+
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

export default new Inventaire_produitService();
