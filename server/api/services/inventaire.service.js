import { client } from '../../config/db.config';

class inventaireService {
  all() {
    return client.query('SELECT * FROM inventaire;');
  }

  byId(id) {
    return client.query('SELECT * FROM inventaire where id=' + id + ';');
  }

  create(labelle, codeean, notre_prix, quantite) {
    return client.query(
      "INSERT INTO inventaire (labelle, codeean, notre_prix, quantite) VALUES ('" +
        labelle +
        "', " +
        notre_prix +
        ', ' +
        codeean +
        ', ' +
        quantite +
        ');'
    );
  }
}

export default new inventaireService();
