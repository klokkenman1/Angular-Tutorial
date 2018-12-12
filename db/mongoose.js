var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Types = mongoose.Types;

if (process.env.NODE_ENV == "testCloud" || process.env.NODE_ENV == "production") {
  mongoose.connect('mongodb+srv://student:MxhMgvIyLlxN717D@cluster0-vc8us.azure.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
} else {
  mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
}


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var userSchema = new Schema({
  username: String,
  password: String
});
var User = mongoose.model("User", userSchema)

var exerciseSchema = new Schema({
  name: String,
  description: String,
  muscles: [String]
});
var Exercise = mongoose.model("Exercise", exerciseSchema)

var trainingscheduleSchema = new Schema({
  name: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  days: [[{ type: Schema.Types.ObjectId, ref: 'Exercise' }]]
});
var Trainingschedule = mongoose.model("Trainingschedule", trainingscheduleSchema)

var foodSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  date: String,
  energy: String,
  fat: String,
  carbohydrate: String,
  fibre: String,
  protien: String,
  salt: String
});
var Food = mongoose.model("Food", foodSchema)

module.exports = { User, Exercise, Trainingschedule, Food };