import { client } from '../../config/db.config';

class DateService {
  all() {
    return client.query('SELECT * FROM date;');
  }

  byId(id) {
    return client.query('SELECT * FROM date where id=' + id + ';');
  }

  create(id, heure, jour, mois, année) {
    return client.query(
      "INSERT INTO date (id, heure, jour, mois ,année) VALUES ('" +
        id +
        "', '" +
        heure +
        "', '" +
        jour +
        "', '" +
        mois +
        "', '" +
        année +
        "');"
    );
  }
}

export default new DateService();
