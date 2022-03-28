import { client } from '../../config/db.config';

class UtilisateurService {
  all() {
    return client.query('SELECT * FROM utilisateur;');
  }

  byId(id) {
    return client.query('SELECT * FROM utilisateur where id=' + id + ';');
  }

  create(id, nom ,prenom) {
    return client.query(
      "INSERT INTO utilisateur (id, nom, prenom) VALUES ('" +
        id +
        "', '" +
        nom +
        "', '" +
        prenom +
        ");"
    );
  }
}

export default new UtilisateurService();