import { client } from '../../config/db.config';

class Inventaire_actionService {
  all() {
    return client.query('SELECT * FROM inventaire_action;');
  }

  byId(id) {
    return client.query('SELECT * FROM inventaire_action where id=' + id + ';');
  }

  create(lieu, magasin) {
    return client.query(
      "INSERT INTO inventaire_action (lieu, magasin) VALUES ('" +
        lieu +
        "', '" +
        magasin +
        "');"
    );
  }
}

export default new Inventaire_actionService();
