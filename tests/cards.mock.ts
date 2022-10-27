
export const findOne = {
  "code": 0,
  "message": "success",
  "data": {
      "card_number": 4485275742308327,
      "expiration_month": "12",
      "expiration_year": "2022",
      "email": "jerson@gmail.com",
      "created_at": "2022-10-27T22:24:18.696Z",
      "__v": 0
  }
};


export const findError = new Error('test find error');

export const create = {
  "code": 0,
  "message": "success",
  "data": {
      "_id": "635b018e1c38682cb0afa4a2",
      "card_number": 4485275742308327,
      "cvv": 322,
      "expiration_month": "12",
      "expiration_year": "2022",
      "email": "jerson@gmail.com",
      "token": "635b018e7U3cG6r0",
      "created_at": "2022-10-27T22:09:18.696Z",
      "__v": 0
  }
}

export const createError = new Error('test create error');



