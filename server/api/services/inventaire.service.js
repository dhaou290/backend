import { client } from '../../config/db.config';

class inventaireService {
  all() {
    return client.query('SELECT * FROM inventaire;');
  }

  byId(id) {
    return client.query('SELECT * FROM inventaire where id=' + id + ';');
  }

  changePrix(codeean, prix) {
    return client.query(
      'UPDATE inventaire SET prix = ' +
        prix +
        " where codeean='" +
        codeean +
        "';"
    );
  }

  benchmark(codeean) {
    return client.query('SELECT * FROM produit where codeean=' + codeean + ';');
  }
  create(codeean, prix, quantite) {
    return client.query(
      "INSERT INTO inventaire (codeean, prix, quantite) VALUES ('" +
        codeean +
        "', " +
        prix +
        ', ' +
        quantite +
        ');'
    );
  }
}

export default new inventaireService();
