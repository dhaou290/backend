import { client } from '../../config/db.config';

class MagasinierService {
  all() {
    return client.query('SELECT * FROM magasinier;');
  }

  byId(id) {
    return client.query('SELECT * FROM magasinier where id=' + id + ';');
  }

  create(email, phone, password, nom_complet,nom_magasin, lieu_magasin) {
    return client.query(
      "INSERT INTO magasinier (email, phone, password,nom_complet ,nom_magasin ,lieu_magasin) VALUES ('" +
        email +
        "', '" +
        phone +
        "', '" +
        password +
        "', '" +
        nom_complet +
        "', '" +
        nom_magasin +
        "', '" +
        lieu_magasin +
        "');"
    );
  }
}

export default new MagasinierService();
