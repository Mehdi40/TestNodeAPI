import defaultModel from './_defaultModel';

class Collections extends defaultModel {
  constructor() {
    super('sc_collection');

    this.alias = 'collection';

    // Relations helper
    this.leftJoinProduct = (queryBuilder, foreignKey) => {
      queryBuilder.leftJoin('sc_gen_product_fr_FR as product', foreignKey, 'product.id');
    };

    // Default Fields
    this.defaultFiels = [
      `${this.alias}.id`,
      `${this.alias}.rating`,
    ];
  }

  /*
   * @name : indexByUser
   */
  indexByUser(filters) {
    const alias = this.alias;
    // Params
    const options = {
      limit: filters.limit || 10,
      offset: filters.offset || 0,
      order: filters.order || 'id',
      orderDirection: filters.orderDirection || 'DESC',
      subtypeId: filters.subtype_id || 1,
      userId: filters.user_id || 117, // Temporary
      actions: filters.actions || 'rating',
    };

    // Query Conditions
    let whereQuery = `
      ${alias}.gen_subtype_id = ${options.subtypeId} and
      ${alias}.is_displayed = 1 and
      ${alias}.user_id = ${options.userId}`;

    switch (options.actions) {
      default:
        whereQuery += ` and ${alias}.rating > 0`;
    }
    const fields = this.defaultFiels.concat(['product.title']);

    // Query
    return this.db(`${this.tableName} as ${alias}`)
      .whereRaw(whereQuery)
      .modify(this.leftJoinProduct, `${alias}.product_id`) // join product for order todo add option
      .orderBy(options.order, options.orderDirection)
      .limit(options.limit)
      .offset(options.offset)
      .select(fields)
      .catch((error) => {
        throw new Error(`[${this.tableName} index] error: ${error.message}`);
      });
  }
}
const collection = new Collections();
export default collection;
