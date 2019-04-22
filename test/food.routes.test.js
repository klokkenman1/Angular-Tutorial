const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();

chai.use(chaiHttp);

describe('Food routes', () => {

  var token;

  before((done) => {
    chai.request(server).post("/api/user/login").send({username:"Test1", password:"Test1"}).end((err, res)=>{
      token = res.text;
      done();
    })
  });

  var foodId;

  it('Should add food', (done) => {
    chai.request(server)
      .post('/api/food').set('x-access-token', token)
      .send({ name: "test" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');

        res.body.should.have.property('name').eql('test');

        foodId = res.body._id;

        done();
      })
  });

  it('Should get food', (done) => {
    chai.request(server)
      .get('/api/food').set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('array');

        res.body[0].should.have.property('name');
        done();
      })
  });


  it('Should get one food', (done) => {
    chai.request(server)
      .get('/api/food/' + foodId).set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');

        res.body.should.have.property('name').eql("test");
        res.body.should.have.property('user');
        done();
      })
  });

  it('Should return food when editing', (done) => {
    chai.request(server)
      .put('/api/food/' + foodId).set('x-access-token', token)
      .send({ name: "test1" })
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.have.property('name').eql("test1");


        done();
      })
  });

  it('Should return id when deleting', (done) => {
    chai.request(server)
      .delete('/api/food/' + foodId).set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.an("string");

        done();
      })
  });
});