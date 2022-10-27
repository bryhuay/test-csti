import * as jf from 'joiful';
export class CreateCardDTO {
  @jf.number().required().min(1000000000000).max(9999999999999999)
  card_number: number;
  @jf.number().required().min(100).max(9999)
  cvv: number;
  @jf.string().required().min(1).max(2)
  expiration_month:string;
  @jf.string().required().min(4).max(4)
  expiration_year: string;
  @jf.string().required().min(5).max(100).email()
  email: string;
  token: string;
  created_at: Date;
  
}
