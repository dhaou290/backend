import { client } from '../../config/db.config';

class ProduitService {
  all() {
    return client.query('SELECT * FROM produit;');
  }

  byId(id) {
    return client.query('SELECT * FROM produit where id=' + id + ';');
  }

  create(nom, labelle, quantite, codeEAN, notre_prix) {
    return client.query(
      "INSERT INTO produit (nom, labelle, quantite, codeean, notre_prix) VALUES ('" +
        nom +
        "', '" +
        labelle +
        "', " +
        quantite +
        ", " +
        codeEAN +
        ", " +
        notre_prix +
        ");"
    );
  }
}

export default new ProduitService();