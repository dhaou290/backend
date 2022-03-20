import { client } from '../../config/db.config';

class EmployeeService {
  all() {
    return client.query('SELECT * FROM employee;');
  }

  byId(id) {
    return client.query('SELECT * FROM employee where id=' + id + ';');
  }

  create(id, nom) {
    return client.query(
      "INSERT INTO employee (id, nom) VALUES ('" + id + "', '" + nom + "');"
    );
  }
}

export default new EmployeeService();
