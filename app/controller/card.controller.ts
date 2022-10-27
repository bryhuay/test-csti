//import { Context } from 'aws-lambda';
import * as jf from 'joiful';
import { MessageUtil } from '../utils/message';
import { ValidateAuth } from '../middleware/validate-auth';
import { CardService } from '../service/card.service';
import { CreateCardDTO } from '../model/dto/create-card.dto';

export class CardController {
  private cardService:CardService;
  private validateAuth:ValidateAuth;
  constructor () {
    this.cardService= new CardService();
    this.validateAuth = new ValidateAuth();
  }

  
  async create (event: any) {   
    try {
      this.validateAuth.ValidatePkHeader(event.headers);
      let params = JSON.parse(event.body);
      const {error}  = jf.validateAsClass(params,CreateCardDTO);
      if(error){
        return MessageUtil.badRequest(error.details);
      } 
      const result = await this.cardService.createCard(params);

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }
  
  async findOneByToken (event: any) {
    try {
      this.validateAuth.ValidatePkHeader(event.headers);
      const token: string =event.pathParameters.token;
      if(!token){
        return MessageUtil.badRequest({detail:"token is required"});
      }

      const result = await this.cardService.findOneCardByToken(token);

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }

  
}
