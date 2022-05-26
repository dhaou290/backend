import { client } from '../../config/db.config';

class inventaireService {
  all() {
    return client.query('SELECT * FROM inventaire;');
  }

  byId(id) {
    return client.query('SELECT * FROM inventaire where id=' + id + ';');
  }

  bymagasin(id) {
    return client.query(
      'SELECT * FROM inventaire where magasin_id=' + id + ';'
    );
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
  create(codeean, prix, quantite, magasin_id) {
    return client.query(
      "INSERT INTO inventaire (codeean, prix, quantite, magasin_id) VALUES ('" +
        codeean +
        "', " +
        prix +
        ', ' +
        quantite +
        ', ' +
        magasin_id +
        ');'
    );
  }
}

export default new inventaireService();
