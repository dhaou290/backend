import { client } from '../../config/db.config';

class MagasinierService {
  all() {
    return client.query('SELECT * FROM magasinier;');
  }

  byId(id) {
    return client.query('SELECT * FROM magasinier where id=' + id + ';');
  }

  create(nom_magasin ,lieu_magasin ) {
    return client.query(
      "INSERT INTO magasinier (nom_magasin ,lieu_magasin ) VALUES ('" +
        nom_magasin +
        "', '" +
        lieu_magasin +
        "');"
    );
  }

}

export default new MagasinierService();