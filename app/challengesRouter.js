module.exports = (app, database) => {
    const challenge = require('./functions/challenge');

    app.get('/challenges', (req, res) => {
        challenge.gallery(req, res, database, req.query);//renders the gallery of challenges
    });

    app.get('/challenges/view/:name', (req, res) =>{
        challenge.view(req, res, database);
    })

    app.get('/challenges/:username/create', (req,res) => {
        if(req.isAuthenticated()) {
            res.render('create-challenge', {
                user : req,
                userData : req.user
            });
        } else {
            res.redirect('/login');
        }
    })

    app.post('/challenges/add', (req, res) => {
        console.log('Trying to add a new challenge.');
        challenge.add(req, res, database, req.body);
        res.redirect('/challenges/:username/create');
    });

    
};

