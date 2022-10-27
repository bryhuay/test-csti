import lambdaTester from 'lambda-tester';
import { expect } from 'chai';
import { findOneByToken, create } from '../app/handler';
import * as cardsMock from './cards.mock';
import { cards as CardsModel } from '../app/model/card';
import sinon from 'sinon';

describe('FindOne [GET]', () => {
  it('success', () => {
    try {
      const s = sinon
        .mock(CardsModel);

      s.expects('findOne')
        .atLeast(1)
        .atMost(3)
        .resolves(cardsMock.findOne);

      return lambdaTester(findOneByToken)
      .event({ pathParameters: { token: "5768396" } })
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(0);
        s.verify();
        s.restore();
      });
    } catch (err) {
      console.log(err);
    }
  });

 
});


describe('Create [POST]', () => {
  it('success', () => {
    const s = sinon
      .mock(CardsModel);

    s.expects('create').resolves(cardsMock.create);

    return lambdaTester(create)
      .event({ body: JSON.stringify({
        card_number:4485275742308327,
        cvv: 322,
        expiration_month:"12",
        expiration_year:"2022",
        email:"jerson@gmail.com"
    })})
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(0);
        s.restore();
      });
  });

  it('error', () => {
    const s = sinon
      .mock(CardsModel);

    s.expects('create').rejects(cardsMock.createError);

    return lambdaTester(create)
      .event({ body: JSON.stringify({
        card_number:4485275742308327,
        cvv: 322,
        expiration_month:"12",
        expiration_year:"2022",
        email:"jerson@gmail.com"
    })})
      .expectResult((result: any) => {
        expect(result.statusCode).to.equal(200);
        const body = JSON.parse(result.body);
        expect(body.code).to.equal(1000);
        s.restore();
      });
  });
});

