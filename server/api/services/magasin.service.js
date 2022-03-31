import { client } from '../../config/db.config';

class MagasinService {
  all() {
    return client.query('SELECT * FROM magasin;');
  }

  byId(id) {
    return client.query('SELECT * FROM magasin where id=' + id + ';');
  }

  create(id, nom_magasin, lieu_magasin) {
    return client.query(
      "INSERT INTO magasin (id, nom_magasin, lieu_magasin) VALUES ('" +
        id +
        "', '" +
        nom_magasin +
        "', '" +
        lieu_magasin +
        "');"
    );
  }
}

export default new MagasinService();
