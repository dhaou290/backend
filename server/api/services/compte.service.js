import { client } from '../../config/db.config';

class CompteService {
  all() {
    return client.query('SELECT * FROM comptes;');
  }

  byId(id) {
    return client.query('SELECT * FROM comptes where id=' + id + ';');
  }

  create(email, phone, password, nom, prenom) {
    return client.query(
      "INSERT INTO comptes (email, phone, password,nom ,prenom) VALUES ('" +
        email +
        "', '" +
        phone +
        "', '" +
        password +
        "', '" +
        nom +
        "', '" +
        prenom +
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
