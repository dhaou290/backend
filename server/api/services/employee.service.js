import { client } from '../../config/db.config';

class EmployeeService {
  all() {
    return client.query(
      'SELECT * FROM magasin mm INNER JOIN employee  e on mm.id=e.magasin_id;'
    );
  }

  byId(id) {
    return client.query(
      'SELECT * FROM magasin mm INNER JOIN employee  e on mm.id=e.magasin_id where e.id=' +
        id +
        ';'
    );
  }

  bymagasin(id) {
    return client.query(
      'SELECT * FROM magasin mm INNER JOIN employee  e on mm.id=e.magasin_id where e.magasin_id=' +
        id +
        ';'
    );
  }

  byadmin(id) {
    return client.query(
      'SELECT * FROM admin mm INNER JOIN employee  e on mm.id=e.admin_id where e.admin_id=' +
        id +
        ';'
    );
  }

  create(email, phone, password, nom_complet, magasin_id, role) {
    client.query(
      "INSERT INTO employee (email, phone, password, nom_complet, magasin_id, role) VALUES ('" +
        email +
        "', '" +
        phone +
        "', '" +
        password +
        "', '" +
        nom_complet +
        "', '" +
        magasin_id +
        "', '" +
        role +
        "');"
    );
    return client.query("SELECT * FROM employee where email='" + email + "';");
  }
  changePassword(email, password) {
    return client.query(
      "UPDATE employee SET password = '" +
        password +
        "' where email='" +
        email +
        "';"
    );
  }
  changePhone(email, phone) {
    return client.query(
      "UPDATE employee SET phone = '" + phone + "' where email='" + email + "';"
    );
  }
  delete(id) {
    return client.query('DELETE from employee where id=' + id + '  ;');
  }
  changenom_complet(email, nom_complet) {
    return client.query(
      "UPDATE employee SET nom_complet = '" +
        nom_complet +
        "' where email='" +
        email +
        "';"
    );
  }
  login(email, password) {
    return client.query(
      "SELECT * FROM employee where email='" +
        email +
        "' AND password='" +
        password +
        "';"
    );
  }
}

export default new EmployeeService();
