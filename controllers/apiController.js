var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "notifications"
});

module.exports = function(app) {
    app.get('/api/project/:id', function(req, res) {
        // get that data from database
        res.json({ name: 'ProBiller' });
    });

    app.post('/api/project', function(req, res) {
        var data  = {name: req.body.name};
        var query = con.query('INSERT INTO projects SET ?', data, function(err, result) {
            if (err) throw err;
        });
        res.send('Thank you!');
    });

    app.delete('/api/project/:id', function(req, res) {
        // delete from the database
    });
};
