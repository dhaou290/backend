import { client } from '../../config/db.config';

class EmployeeService {
  all() {
    return client.query('SELECT * FROM employee;');
  }

  byId(id) {
    return client.query('SELECT * FROM employee where id=' + id + ';');
  }

  create(nom) {
    return client.query("INSERT INTO employee (nom) VALUES ('" + nom + "');");
  }

  login(email, password) {
    return client.query(
      "SELECT * FROM cemployee where email='" +
        email +
        "' AND password='" +
        password +
        "';"
    );
  }
}

export default new EmployeeService();
