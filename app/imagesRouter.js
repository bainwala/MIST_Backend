//check if this is right
module.exports = (app, database) => {
  const image = require("./functions/image");
  //up to here

  // app.get("/:imageid", (req, res) => {
  //   image.buildPage(req, res, database);
  // });

  app.get("/:username/images", (req, res) => {
    albums.allImagesinAlbum(req, res, database);
  });

  app.post("/:imageid", (req, res) => {
    if (req.body.commentSubmit != null) {
      image.saveComment(req, res, database);
    } else if (req.body.delete != null) {
      image.deleteImage(req, res, database);
    } else if (req.body.add != null) {
      image.addtoAlbum(req, res, database);
    } else if (req.body.profile != null) {
      image.setProfilePicture(req, res, database);
    }
  });
};
/*
 // --------------------------------------------------
  // Path: /image

const imagesSchema = new mongoose.Schema({
  userid: Number,
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

  //   Image page
  app.get('/image/:imageid', function(req,res) {
    image.buildPage(req, res, database);
  }); DONE (ITHINK?)

  app.get('/user/:username/images', function(req,res) {
    albums.allImagesinAlbum(req, res, database);
  }); DONE I THINK

  app.post('/image/:imageid', function(req,res) {
    if(req.body.commentSubmit != null) {
      image.saveComment(req, res, database);
    }
    else if(req.body.delete != null) {
      image.deleteImage(req, res, database);
    }
    else if (req.body.add != null){
      image.addtoAlbum(req, res, database);
    }
    else if (req.body.profile != null){
      image.setProfilePicture(req, res, database);
    };
  }); DONE I THINK?

*/
