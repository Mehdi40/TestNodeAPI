import Scouts from '../models/scouts';
import Users from '../models/users';


class ScoutsController {
  constructor() {
    this.currentUserId = 117; // temporary, Todo use auth
  }

  /*
   * @name : addScout
   */
  async addScout(scoutId) {
    // check if alreadys scout
    const scout = await Scouts.isScout(this.currentUserId, scoutId);
    // If not insert new scout
    if (!scout) {
      // check user
      const user = await Users.findById(scoutId);
      if (!user) ctx.throw(404, 'User not found');
      // insert Scout
      const added = await Scouts.add(this.currentUserId, scoutId);
    }

    return { message: 'Scout added sucessfully' };
  }
}

const scoutsController = new ScoutsController();
export default scoutsController;
