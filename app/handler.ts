
import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});
import { CardController } from './controller/card.controller';
const cardsController = new CardController();

export const create: Handler = (event: any, context: Context) => {
  console.log(context.awsRequestId);
  return cardsController.create(event);
};


export const findOneByToken: Handler = (event: any, context: Context) => {
  console.log(context.awsRequestId);
  return cardsController.findOneByToken(event);
};



