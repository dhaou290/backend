import { client } from '../../config/db.config';

class MagasinService {
  all() {
    return client.query('SELECT * FROM magasin;');
  }

  byId(id) {
    return client.query('SELECT * FROM magasin where id=' + id + ';');
  }

  byadmin(id) {
    return client.query('SELECT * FROM magasin where admin_id=' + id + ';');
  }
  create(nom_magasin, lieu_magasin, admin_id) {
    client.query(
      "INSERT INTO magasin (nom_magasin, lieu_magasin, admin_id) VALUES ('" +
        nom_magasin +
        "', '" +
        lieu_magasin +
        "', '" +
        admin_id +
        "');"
    );
    return client.query(
      "SELECT * FROM magasin where nom_magasin='" +
        nom_magasin +
        "' and lieu_magasin='" +
        lieu_magasin +
        "' ;"
    );
  }
}

export default new MagasinService();
