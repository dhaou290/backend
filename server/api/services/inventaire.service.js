import { client } from '../../config/db.config';

class inventaireService {
  all() {
    return client.query(
      'SELECT * FROM inventaire i INNER JOIN produit p on p.codeean=cast(i.codeean as numeric);'
    );
  }

  byId(id) {
    return client.query(
      'SELECT * FROM inventaire i INNER JOIN produit p on p.codeean=cast(i.codeean as numeric) where i.id=' +
        id +
        ';'
    );
  }

  bymagasin(id) {
    return client.query(
      'SELECT * FROM inventaire i INNER JOIN produit p on p.codeean=cast(i.codeean as numeric) where i.magasin_id=' +
        id +
        ';'
    );
  }

  changePrix(codeean, magasin_id, prix) {
    return client.query(
      'UPDATE inventaire SET prix = ' +
        prix +
        " where codeean='" +
        codeean +
        "' and magasin_id='" +
        magasin_id +
        "';"
    );
  }

  benchmark(codeean) {
    return client.query(
      "SELECT * FROM inventaire i INNER JOIN produit p on p.codeean=cast(i.codeean as numeric) where i.codeean='" +
        codeean +
        "' ;"
    );
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
