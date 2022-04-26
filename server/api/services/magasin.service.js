import { client } from '../../config/db.config';

class MagasinService {
  all() {
    return client.query('SELECT * FROM magasin;');
  }

  byId(id) {
    return client.query('SELECT * FROM magasin where id=' + id + ';');
  }

  create(nom_magasin, lieu_magasin, nombre_des_employee, magasinier_id) {
    return client.query(
      "INSERT INTO magasin (nom_magasin, lieu_magasin, nombre_des_employee ,magasinier_id) VALUES ('" +
      nom_magasin +
      "', '" +
      lieu_magasin +
      "', '" +
      nombre_des_employee +
      "', '" +
      magasinier_id +
      "');"
    );
  }
}

export default new MagasinService();
