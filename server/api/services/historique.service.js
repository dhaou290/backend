import { client } from '../../config/db.config';

class HistoriqueService {
  all() {
    return client.query('SELECT * FROM historique;');
  }

  byId(id) {
    return client.query('SELECT * FROM historique where id=' + id + ';');
  }

  create(id, type_inventaire, lieu_inventaire, date_inventaire,qaintite) {
    return client.query(
      "INSERT INTO historique (id, type_inventaire, lieu_inventaire, date_inventaire,qaintite) VALUES ('" +
        id +
        "', '" +
        type_inventaire +
        "', '" +
        lieu_inventaire +
        "', '" +
        date_inventaire +
        "', '" +
        qaintite +
        "');"
    );
  }
}

export default new HistoriqueService();
