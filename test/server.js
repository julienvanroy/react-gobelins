process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let User = require("../models/schemaUsers");
let should = chai.should();

chai.use(chaiHttp);

describe('USER', function () {
  it('should login the user on /login', function(done) {
    chai.request(server)
      .post('/login')
      .send({'username': 'admin', 'password': 'admin'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('isConnected');
        res.body.isConnected.should.equal(true);
        done();
      });
  });
});
