import { client } from '../../config/db.config';

class EmployeeService {
  all() {
    return client.query('SELECT * FROM employee;');
  }

  byId(id) {
    return client.query('SELECT * FROM employee where id=' + id + ';');
  }

  create(email, phone, password, nom_complet, nom_magasin, lieu_magasin) {
    return client.query(
      "INSERT INTO employee (email, phone, password,nom_complet ,nom_magasin ,lieu_magasin) VALUES ('" +
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
