/**
 * @file ping.spec.js
 * @author jotacemarin
 */

/** Dependencies */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

/** Server */
import server from '../app';

/** Configure */
chai.use(chaiHttp);

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
