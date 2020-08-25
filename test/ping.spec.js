/**
 * @file ping.spec.js
 * @author jotacemarin
 */

/** Dependencies */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';

/** Server */
import server from '../app';

/** Configure */
chai.use(chaiHttp);
dotenv.config();

/** Test */
describe('GET ping', () => {
    it('expect response status to be OK', done => {
        chai.request(server)
            .get('/api/ping')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
});

describe('GET ping/echo', () => {
    it('expect response status to be OK', done => {
        chai.request(server)
            .get('/api/ping/echo/test')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
});

describe('POST ping/sample', () => {
    it('expect process executed', done => {
        const body = { session: '1234', message: 'test' };
        chai.request(server)
            .post('/api/ping/sample')
            .set('content-type', 'application/json;charset=UTF-8')
            .send(body)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.be.json;
                done();
            });
    });
});
