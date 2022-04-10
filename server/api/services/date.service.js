import { client } from '../../config/db.config';

class DateService {
  all() {
    return client.query('SELECT * FROM date;');
  }

  byId(id) {
    return client.query('SELECT * FROM date where id=' + id + ';');
  }

  create(heure, jour, mois, année) {
    return client.query(
      "INSERT INTO date (heure, jour, mois ,année) VALUES ('" +
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
