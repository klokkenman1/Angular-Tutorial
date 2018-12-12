const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();

chai.use(chaiHttp);

describe('Thread routes', () => {

  var token;

  before((done) => {
    chai.request(server).post("/api/user/login").send({username:"Test1", password:"Test1"}).end((err, res)=>{
      token = res.text;
      done();
    })
  });

  var trainingscheduleId;

  it('Should add trainingschedule', (done) => {
    chai.request(server)
      .post('/api/trainingschedule').set('x-access-token', token)
      .send({ name: "test", days: [] })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');

        res.body.should.have.property('days').eql([]);
        res.body.should.have.property('name').eql('test');

        trainingscheduleId = res.body._id;

        done();
      })
  });

  it('Should get trainingschedules', (done) => {
    chai.request(server)
      .get('/api/trainingschedule').set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('array');

        res.body[0].should.have.property('days');
        res.body[0].should.have.property('name');
        done();
      })
  });


  it('Should get one trainingschedule', (done) => {
    chai.request(server)
      .get('/api/trainingschedule/' + trainingscheduleId).set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');

        res.body.should.have.property('days');
        res.body.should.have.property('name').eql("test");
        res.body.should.have.property('user');
        done();
      })
  });

  it('Should return trainingschedule when editing', (done) => {
    chai.request(server)
      .put('/api/trainingschedule/' + trainingscheduleId).set('x-access-token', token)
      .send({ name: "test1", days: [] })
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.have.property('name').eql("test1");
        res.body.should.have.property('days').eql([]);


        done();
      })
  });

  it('Should return id when deleting', (done) => {
    chai.request(server)
      .delete('/api/trainingschedule/' + trainingscheduleId).set('x-access-token', token)
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.an("string");

        done();
      })
  });
});