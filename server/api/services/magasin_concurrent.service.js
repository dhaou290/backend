import { client } from '../../config/db.config';

class Magasin_concurrentService {
  all() {
    return client.query('SELECT * FROM Magasin_concurrent;');
  }

  byId(id) {
    return client.query(
      'SELECT * FROM magasin_concurrent where id=' + id + ';'
    );
  }

  create(nom, lieu) {
    client.query(
      "INSERT INTO magasin_concurrent (nom, lieu) VALUES ('" +
        nom +
        "', '" +
        lieu +
        "');"
    );
    return client.query(
      "SELECT * FROM magasin_concurrent where nom='" +
        nom +
        "' and lieu='" +
        lieu +
        "';"
    );
  }
}

export default new Magasin_concurrentService();
