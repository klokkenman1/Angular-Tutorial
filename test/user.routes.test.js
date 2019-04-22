const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();

chai.use(chaiHttp);

describe('User routes', () => {
    it("Should login and return a token", (done) => {
        chai.request(server).post("/api/user/login").send({username:"Test1", password:"Test1"}).end((err, res)=>{
          res.text.should.be.an("string");
          res.status.should.be.eq(200);
          done();
        })
      });

    it("Should not login and return 400", (done) => {
    chai.request(server).post("/api/user/login").send({username:"Test1", password:""}).end((err, res)=>{
        res.status.should.be.eq(400);
        res.text.should.be.an("string");
        done();
    })
    });
});