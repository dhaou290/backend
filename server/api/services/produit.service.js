import { client } from '../../config/db.config';

class ProduitService {
  all() {
    return client.query('SELECT * FROM produit;');
  }

  byId(id) {
    return client.query('SELECT * FROM produit where id=' + id + ';');
  }

  create(labelle, codeEAN, notre_prix) {
    return client.query(
      "INSERT INTO produit (labelle, codeean, notre_prix) VALUES ('" +
        labelle +
        "', " +
        notre_prix +
        ', ' +
        codeEAN +
        ');'
    );
  }
}

export default new ProduitService();
