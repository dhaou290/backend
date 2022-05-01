import { client } from '../../config/db.config';

class MagasinierService {
  all() {
    return client.query(
      'SELECT * FROM magasinier m INNER JOIN magasin mm on m.id=mm.magasinier_id ;'
    );
  }

  byId(id) {
    return client.query(
      'SELECT * FROM magasinier m INNER JOIN magasin mm on m.id=mm.magasinier_id where m.id=' +
        id +
        ';'
    );
  }

  create(email, phone, password, nom_complet, role) {
    client.query(
      "INSERT INTO magasinier (email, phone, password, nom_complet, role) VALUES ('" +
        email +
        "', '" +
        phone +
        "', '" +
        password +
        "', '" +
        nom_complet +
        "', '" +
        role +
        "');"
    );
    return client.query(
      "SELECT * FROM magasinier where email='" + email + "';"
    );
  }

  changePassword(email, password) {
    return client.query(
      "UPDATE magasinier SET password = '" +
        password +
        "' where email='" +
        email +
        "';"
    );
  }
}

export default new MagasinierService();
