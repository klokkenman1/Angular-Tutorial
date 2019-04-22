const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();

chai.use(chaiHttp);

describe('Exercise routes', () => {

  var token;

  before((done) => {
    chai.request(server).post("/api/user/login").send({username:"Test1", password:"Test1"}).end((err, res)=>{
      token = res.text;
      done();
    })
  });

  var exerciseId;

  it('Should add exercise', (done) => {
    chai.request(server)
      .post('/api/exercise').set('x-access-token', token)
      .send({ name: "test", description: "test", muscles: "test" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');

        res.body.should.have.property('name').eql('test');
        res.body.should.have.property('description').eql('test');
        res.body.should.have.property('muscles').contain('test');


        exerciseId = res.body._id;

        done();
      })
  });

  it('Should get exercise', (done) => {
    chai.request(server)
      .get('/api/exercise').set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('array');

        res.body[0].should.have.property('name');
        done();
      })
  });


  it('Should get one exercise', (done) => {
    chai.request(server)
      .get('/api/exercise/' + exerciseId).set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');

        res.body.should.have.property('name').eql("test");
        done();
      })
  });

  it('Should return exercise when editing', (done) => {
    chai.request(server)
      .put('/api/exercise/' + exerciseId).set('x-access-token', token)
      .send({ name: "test1", description: "test", muscles: "test" })
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.have.property('name').eql("test1");


        done();
      })
  });

  it('Should return id when deleting', (done) => {
    chai.request(server)
      .delete('/api/exercise/' + exerciseId).set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.an("string");

        done();
      })
  });
});