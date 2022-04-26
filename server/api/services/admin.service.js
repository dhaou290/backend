import { client } from '../../config/db.config';

class AdminService {
  all() {
    return client.query('SELECT * FROM admin;');
  }

  byId(id) {
    return client.query('SELECT * FROM admin where id=' + id + ';');
  }

  create(email, phone, password, nom_complet) {
    return client.query(
      "INSERT INTO admin (email, phone, password,nom_complet) VALUES ('" +
        email +
        "', '" +
        phone +
        "', '" +
        password +
        "', '" +
        nom_complet +
        "');"
    );
  }
  login(email, password) {
    return client.query(
      "SELECT * FROM admin where email='" +
        email +
        "' AND password='" +
        password +
        "';"
    );
  }
}

export default new AdminService();
