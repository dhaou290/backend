import { client } from '../../config/db.config';

class AdminService {
  all() {
    return client.query('SELECT * FROM admin;');
  }

  byId(id) {
    return client.query('SELECT * FROM admin where id=' + id + ';');
  }

  create(email, phone, password, nom_complet, role) {
    return client.query(
      "INSERT INTO admin (email, phone, password, nom_complet, role) VALUES ('" +
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
