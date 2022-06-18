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
  delete(id) {
    return client.query('DELETE from magasin where id=' + id + '  ;');
  }

  changenom_magasin(nom_magasin, magasin_id) {
    return client.query(
      "UPDATE magasin SET nom_magasin = '" +
        nom_magasin +
        "' where id='" +
        magasin_id +
        "';"
    );
  }

  changelieu_magasin(lieu_magasin, magasin_id) {
    return client.query(
      "UPDATE magasin SET lieu_magasin = '" +
        lieu_magasin +
        "' where id='" +
        magasin_id +
        "';"
    );
  }
}

export default new MagasinService();
