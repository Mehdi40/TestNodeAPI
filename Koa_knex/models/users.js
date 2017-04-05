import defaultModel from './_defaultModel';

class Users extends defaultModel {
  constructor() {
    super('sc_user');
  }

  /*
   * @name : findById
   */
  findById(id) {
    if (!id) {
      return Promise.resolve(false);
    }

    return this.db(this.tableName)
      .where({ id, state: 1 })
      .select('id')
      .then(result => this.convertResult(result))
      .catch((error) => {
        // Todo use thrown
        throw new Error(`[${this.tableName} index] error: ${error.message}`);
      });
  }
}
const users = new Users();
export default users;
