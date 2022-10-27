import ShortUniqueId  from 'short-unique-id'
import { CreateCardDTO } from '../model/dto/create-card.dto';
import { CardRepository } from '../repository/card.repository';

export class CardService {
  private cardRepository:CardRepository;
  constructor() {
    this.cardRepository = new CardRepository();
  }
  
  async createCard (params: CreateCardDTO): Promise<object> {   
    
    try {    
      this.validateBussinessRules(params);
    
      const uid = new ShortUniqueId();
      const uidWithTimestamp = uid.stamp(16);
      params.token = uidWithTimestamp;
      params.created_at = new Date(); 
      const result = await this.cardRepository.createCard(params);
      return result;
    } catch (err) {
      throw err;
    }
  }

 
  async findOneCardByToken (token:string) {
    const record:any = await this.cardRepository.findOneCardByToken(token);

    if(!record){
      throw {code: 5, message:"No se encontro el registro"}
    }
    let dateExp: Date = record.created_at;
    dateExp.setMinutes(dateExp.getMinutes()+15);
    const today = new Date();
    if( dateExp < today ){
      throw {code: 5, message:"El token expiro"}
    }
    return record;
  }

  validateBussinessRules(params:CreateCardDTO):boolean{
    if(!this.isAvailableCard(params.card_number)){
        throw {code: 2, message:"Tarjeta invalida"}
    }
    const date = new Date();
    if(parseInt(params.expiration_year)> date.getFullYear()+5){
        throw {code: 3, message:"Año de expiracion invalido"}
    }
    const emailSplit = params.email.split("@");
    if(!emailSplit[1].includes("gmail.com"||"hotmail.com"||"yahoo.es")){
        throw {code: 4, message:"Email invalido"}
    }
    return true;
  }
  isAvailableCard(numberCard:number):boolean{
    let arr = (numberCard + '')
        .split('')
        .reverse()
        .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
  }


  
}
