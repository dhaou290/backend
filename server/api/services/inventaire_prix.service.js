import { client } from '../../config/db.config';

class Inventaire_prixService {
  all() {
    return client.query('SELECT * FROM Inventaire_prix;');
  }

  byId(id) {
    return client.query('SELECT * FROM Inventaire_prix where id=' + id + ';');
  }

  create(date, lieu, nom_du_magasin, ocr) {
    return client.query(
      "INSERT INTO Inventaire_prix (date, lieu, nom_du_magasin, ocr) VALUES ('" +
        date +
        "', '" +
        lieu +
        "', '" +
        nom_du_magasin +
        "', '" +
        ocr +
        "');"
    );
  }
}

export default new Inventaire_prixService();
