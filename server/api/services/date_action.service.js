import { client } from '../../config/db.config';

class Date_actionService {
  all() {
    return client.query('SELECT * FROM date_action;');
  }

  byId(id) {
    return client.query('SELECT * FROM date_action where id=' + id + ';');
  }

  create(heure, jour, mois, année) {
    return client.query(
      "INSERT INTO date_action (heure, jour, mois ,année) VALUES ('" +
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

export default new Date_actionService();
