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

  changePassword(email, password) {
    return client.query(
      "UPDATE admin SET password = '" +
        password +
        "' where email='" +
        email +
        "';"
    );
  }
  changePhone(email, phone) {
    return client.query(
      "UPDATE admin SET phone = '" + phone + "' where email='" + email + "';"
    );
  }
  changenom_complet(email, nom_complet) {
    return client.query(
      "UPDATE admin SET nom_complet = '" +
        nom_complet +
        "' where email='" +
        email +
        "';"
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
