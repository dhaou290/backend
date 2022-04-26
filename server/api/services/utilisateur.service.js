import { client } from '../../config/db.config';

class UtilisateurService {
  all() {
    return client.query('SELECT * FROM Utilisateur;');
  }

  byId(id) {
    return client.query('SELECT * FROM Utilisateur where id=' + id + ';');
  }

  create(nom_complet, phone, email, password) {
    return client.query(
      "INSERT INTO Utilisateur (nom_complet, phone, email ,password) VALUES ('" +
      nom_complet +
      "', '" +
      phone +
      "', '" +
      email +
      "', '" +
      password +
      "');"
    );
  }
}

export default new UtilisateurService();
