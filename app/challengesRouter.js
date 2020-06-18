module.exports = (router, database) => {
    const challenge = require('./functions/challenges');

    router.get('/', (req, res) => {
        challenge.gallery(req, res, database, req.query);//renders the gallery of challenges
    });

    router.get('/create', (req, res) => {
        res.render('create-challenge', {
            user: req,
            userData: req.user
        }); //renders the form to create a challenge
    });

    router.post('/add', (req, res) => {
        console.log('Trying to add a new challenge.');
        challenge.add(req, res, database, req.body);
        res.redirect('/challenges/create');
    });

    return router;
};

