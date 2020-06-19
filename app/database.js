const mongoose = require("mongoose");
const passportLocal = require("passport-local-mongoose");
const sanitize = require("mongo-sanitize");

mongoose.connect("mongodb://localhost:27017/usersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // make connection to database or create it if it does not yet exist

// Schemas

//Users
const usersSchema = new mongoose.Schema({
  email: String,
  fname: String,
  lname: String,
  username: String,
  password: String,
});

<<<<<<< HEAD
//Challenges
const challengesSchema = new mongoose.Schema({
  categoryid: String,
  position: String,
  createdAt: String,
  modifiedAt: String,
  title: String,
  name: String,
  description: String,
  code: String,
  rating: Number,
=======
const challengeSchema = new mongoose.Schema({
    category: String,
    position: String,
    createdAt: String,
    modifiedAt: String,
    title: String,
    name: String,
    description: String,
    code: String,
    rating: Number,
>>>>>>> bb037ef838bbdb19d290a7b51a0b78c0a6459295
});

//Images
const imagesSchema = new mongoose.Schema({
  ownerid: Number,
  createdAt: String,
  modifiedAt: String,
  imageid: String,
  code: String,
  codevisible: Boolean,
  format: String,
  rating: Number,
  title: String,
  license: String,
  public: Boolean,
  basedon: Number,
  Blurb: String,
});

// Configuring Schemas
usersSchema.plugin(passportLocal);

// Models
const User = mongoose.model("User", usersSchema);
<<<<<<< HEAD
const Challenges = mongoose.model("Challenges", challengesSchema);
const Images = mongoose.model("Images", imagesSchema);

module.exports.User = User;
module.exports.Challenges = Challenges;
module.exports.Images = Images;
=======
const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports.User = User;
module.exports.Challenge = Challenge;
>>>>>>> bb037ef838bbdb19d290a7b51a0b78c0a6459295

module.exports.sanitize = sanitize; //sanitizes string
