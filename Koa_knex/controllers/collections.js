import Collections from '../models/collections';

class CollectionsController {
  constructor() {
    this.currentUserId = 117; // temporary, Todo use auth
  }

  /*
   * @name : indexByUser
   */
  async indexByUser(params) {
    const page = params.page ? params.page : 1;
    const limit = 10;
    const offset = (page - 1) * limit;
    const filters = {
      order: 'product.rating',
      limit,
      offset,
    };

    const collections = await Collections.indexByUser(filters);

    return collections;
  }
}

const collectionsController = new CollectionsController();
export default collectionsController;
