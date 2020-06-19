//check if this is right
module.exports = (router, database) => {
  const images = require("./functions/image");
  //up to here

  router.get("/:imageid", (req, res) => {
    res.render("image.buildPage", {
      userid: req,
      userData: req.user,
      createdAt: "",
      modifiedAt: "",
      imageid: "",
      code: "",
      codevisible: "",
      format: "",
      rating: "",
      title: "",
      license: "",
      public: "",
      basedon: "",
      Blurb: "",
    });
  });

  app.get("/:username/images", (req, res) => {
    res.render("albums.allImagesinAlbum", {
      userid: req,
      userData: req.user,
      createdAt: "",
      modifiedAt: "",
      imageid: "",
      code: "",
      codevisible: "",
      format: "",
      rating: "",
      title: "",
      license: "",
      public: "",
      basedon: "",
      Blurb: "",
    });
  });

  router.post("/:imageid", (req, res) => {
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

  return router;
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
