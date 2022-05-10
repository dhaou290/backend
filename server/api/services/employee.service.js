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

  create(email, phone, password, nom_complet, magasin_id, role) {
    return client.query(
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
