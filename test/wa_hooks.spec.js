/**
 * @file wa_hooks.spec.js
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
    it('request failed because is group chat', done => {
        const body = {
            'contact[type]': 'group',
            'message[type]': 'chat',
            'contact[uid]': '1234',
            'message[body][text]': 'test test'
        };
        chai.request(server)
            .post('/api/wahooks/message_received')
            .set('content-type', 'application/json;charset=UTF-8')
            .send(body)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });

    it('request failed because is message with image', done => {
        const body = {
            'contact[type]': 'user',
            'message[type]': 'image',
            'contact[uid]': '1234',
            'message[body][text]': 'test test'
        };
        chai.request(server)
            .post('/api/wahooks/message_received')
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

describe('POST wahooks/message_acknowledge', () => {
    it('expect response status to be OK', done => {
        const body = { ack: 1 };
        chai.request(server)
            .post('/api/wahooks/message_acknowledge')
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
