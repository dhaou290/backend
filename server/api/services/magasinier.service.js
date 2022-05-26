import { client } from '../../config/db.config';

class MagasinierService {
  all() {
    return client.query(
      'SELECT * FROM magasin m INNER JOIN magasinier mm on m.id=mm.magasin_id ;'
    );
  }

  byId(id) {
    return client.query(
      'SELECT * FROM magasin m INNER JOIN magasinier mm on m.id=mm.magasin_id where mm.id=' +
        id +
        ';'
    );
  }

  create(email, phone, password, nom_complet, role, magasin_id) {
    client.query(
      "INSERT INTO magasinier (email, phone, password, nom_complet, role, magasin_id) VALUES ('" +
        email +
        "', '" +
        phone +
        "', '" +
        password +
        "', '" +
        nom_complet +
        "', '" +
        role +
        "', '" +
        magasin_id +
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

  changePhone(email, phone) {
    return client.query(
      "UPDATE magasinier SET phone = '" +
        phone +
        "' where email='" +
        email +
        "';"
    );
  }
  changenom_complet(email, nom_complet) {
    return client.query(
      "UPDATE magasinier SET nom_complet = '" +
        nom_complet +
        "' where email='" +
        email +
        "';"
    );
  }
  delete(id) {
    return client.query('DELETE from magasinier where id=' + id + '  ;');
  }
  login(email, password) {
    return client.query(
      "SELECT * FROM magasinier where email='" +
        email +
        "' AND password='" +
        password +
        "';"
    );
  }
}

export default new MagasinierService();
