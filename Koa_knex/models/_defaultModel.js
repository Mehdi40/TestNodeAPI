import knex from '../db';
import moment from 'moment';

export default class model {
  constructor(tableName) {
    this.tableName = tableName;
    this.db = knex;
  }

  convertResult(result) {
    if (typeof result !== 'undefined' && result != null && result.length > 0) {
      return result[0];
    }
    return null;
  }

  currentDate() {
    return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  }


}