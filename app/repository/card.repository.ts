import { Model }from 'mongoose';
import { CreateCardDTO } from '../model/dto/create-card.dto';
import { cards } from '../model';

export class CardRepository {
  private card: Model<any>;
  constructor() {
    this.card = cards;
  }

  
  public async createCard (params: CreateCardDTO): Promise<object> {
    try {
      const result = await this.card.create(params);

      return result;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }


  public async findOneCardByToken (token: string) {
    return await cards.findOne({ token }).select({ "cvv": 0, "_id": 0, "token":0});
  }

}
