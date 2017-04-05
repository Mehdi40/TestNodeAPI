import defaultModel from './_defaultModel';

class Scouts extends defaultModel {
  constructor() {
    super('sc_scout');
  }

  /*
   * @name : isScout
   */
  isScout(userId, scoutId) {
    if (!userId && !scoutId) {
      throw new Error(`[${this.tableName} isScout] error: Wrong parameters`);
    }

    return this.db(this.tableName)
      .where({ user_id_scout: scoutId, user_id: userId, state: 1 })
      .select('id')
      .then(result => this.convertResult(result))
      .catch((error) => {
        throw new Error(`[${this.tableName} index] error: ${error.message}`);
      });
  }

  /*
   * @name : add
   */
  add(userId, scoutId) {
    if (!userId || !scoutId || scoutId === userId) {
      throw new Error(`[${this.tableName} add] error: Wrong parameters`);
    }

    const data = [{
      user_id: userId,
      user_id_scout: scoutId,
      state: 1,
      date_creation: this.currentDate(),
    }];

    return this.db.insert(data)
      .into('sc_scout')
      .then(result => this.convertResult(result))      
      .catch((error) => {
        throw new Error(`[${this.tableName} index] error: ${error.message}`);
      });
  }
}
const scouts = new Scouts();
export default scouts;
