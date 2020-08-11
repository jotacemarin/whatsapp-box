/**
 * @file wa.spec.js
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
describe('POST wahooks/message_received', () => {
    it('expect response status to be OK', done => {
        const body = { to: '1234', message: 'test' };
        chai.request(server)
            .post('/api/wa/send_message')
            .set('content-type', 'application/json;charset=UTF-8')
            .send(body)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });
});
