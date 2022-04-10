import { client } from '../../config/db.config';

class inventaireService {
  all() {
    return client.query('SELECT * FROM inventaire;');
  }

  byId(id) {
    return client.query('SELECT * FROM inventaire where id=' + id + ';');
  }

  create(id, id_inventaire) {
    return client.query(
      "INSERT INTO inventaire (id, id_inventaire) VALUES ('"+
        id_inventaire +
        "');"
    );
  }
}

export default new inventaireService();
