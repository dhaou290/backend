import { client } from '../../config/db.config';

class EmployeeService {
  all() {
    return client.query('SELECT * FROM employee;');
  }

  byId(id) {
    return client.query('SELECT * FROM employee where id=' + id + ';');
  }

  create(email, phone, password, nom,id_admin, prenom) {
    return client.query(
      "INSERT INTO employee (email, phone, password,nom ,id_admin ,prenom) VALUES ('" +
        email +
        "', '" +
        phone +
        "', '" +
        password +
        "', '" +
        nom +
        "', '" +
        id_admin +
        "', '" +
        prenom +
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
