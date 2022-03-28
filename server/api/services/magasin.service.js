import { client } from '../../config/db.config';

class MagasinService {
  all() {
    return client.query('SELECT * FROM service;');
  }

  byId(id) {
    return client.query('SELECT * FROM service where id=' + id + ';');
  }

  create(id, nom_magasin, lieu_magasin)  {
    return client.query(
      "INSERT INTO service (id, nom) VALUES ('" + id + "', '" + nom_magasin + "', '" + lieu_magasin + "');"
    );
  }
}

export default new MagasinService();
