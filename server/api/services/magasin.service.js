import { client } from '../../config/db.config';

class MagasinService {
  all() {
    return client.query('SELECT * FROM magasin;');
  }

  byId(id) {
    return client.query('SELECT * FROM magasin where id=' + id + ';');
  }

  create(nom_magasin, lieu_magasin) {
    client.query(
      "INSERT INTO magasin (nom_magasin, lieu_magasin) VALUES ('" +
        nom_magasin +
        "', '" +
        lieu_magasin +
        "');"
    );
    return client.query(
      "SELECT * FROM magasin where nom_magasin='" +
        nom_magasin +
        "' and lieu_magasin='" +
        lieu_magasin +
        "' ;"
    );
  }
}

export default new MagasinService();
