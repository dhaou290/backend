import { client } from '../../config/db.config';

class CompteService {
  all() {
    return client.query('SELECT * FROM comptes;');
  }

  byId(id) {
    return client.query('SELECT * FROM comptes where id=' + id + ';');
  }

  create(id, email, phone, password) {
    return client.query(
      "INSERT INTO comptes (id, email, phone, password) VALUES ('" +
        id +
        "', '" +
        email +
        "', '" +
        phone +
        "', '" +
        password +
        "');"
    );
  }
  login(email, password) {
    return client.query(
      "SELECT * FROM comptes where email='" +
        email +
        "' AND password='" +
        password +
        "';"
    );
  }
}

export default new CompteService();
