import { client } from '../../config/db.config';

class Magasin_concurrentService {
  all() {
    return client.query('SELECT * FROM Magasin_concurrent;');
  }

  byId(id) {
    return client.query('SELECT * FROM Magasin_concurrent where id=' + id + ';');
  }

  create(nom, lieu) {
    return client.query(
      "INSERT INTO Magasin_concurrent (nom, lieu) VALUES ('" +
        nom +
        "', '" +
        lieu +
        ');'
    );
  }
}

export default new Magasin_concurrentService();