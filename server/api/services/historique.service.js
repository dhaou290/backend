import { client } from '../../config/db.config';

class HistoriqueService {
  all() {
    return client.query('SELECT * FROM historique;');
  }

  byId(id) {
    return client.query('SELECT * FROM historique where id=' + id + ';');
  }
  create(type_inventaire, lieu_inventaire, date_inventaire, quantite) {
    return client.query(
      "INSERT INTO historique (type_inventaire, lieu_inventaire, date_inventaire, quantite) VALUES ('" +
        type_inventaire +
        "', '" +
        lieu_inventaire +
        "', '" +
        date_inventaire +
        "', '" +
        quantite +
        "');"
    );
  }
}

export default new HistoriqueService();
