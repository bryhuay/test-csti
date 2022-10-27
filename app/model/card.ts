import mongoose from 'mongoose';

export type CardsDocument = mongoose.Document & {
  card_number: number;
  cvv: number;
  expiration_month:string;
  expiration_year: string;
  email: string;
  token: string;
  created_at: Date
};

const cardsSchema = new mongoose.Schema({
  card_number: Number,
  cvv: Number,
  expiration_month: String,
  expiration_year: String,
  email: String,
  token: String,
  created_at: Date
});

// Note: OverwriteModelError: Cannot overwrite `Books` model once compiled. error
export const cards = (mongoose.models.cards ||
mongoose.model<CardsDocument>('cards', cardsSchema,'cards')
);
