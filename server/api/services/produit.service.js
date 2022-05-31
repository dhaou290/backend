import { client } from '../../config/db.config';

class ProduitService {
  all() {
    return client.query('SELECT * FROM produit;');
  }

  byId(id) {
    return client.query('SELECT * FROM produit where id=' + id + ';');
  }

  create(labelle, codeean) {
    return client.query(
      "INSERT INTO produit (labelle, codeean) VALUES ('" +
        labelle +
        "', " +
        codeean +
        ');'
    );
  }
}

export default new ProduitService();