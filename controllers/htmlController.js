var bodyParser = require('body-parser');
var mysql = require('mysql');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "addressbook"
});

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/person/:id', function(req, res) {
        res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
    });

    app.post('/person', urlencodedParser, function(req, res) {
        res.send('Thank you!');

        var data  = {firstname: req.body.firstname, lastname: req.body.lastname};
        var query = con.query('INSERT INTO people SET ?', data, function(err, result) {

        });
        console.log(query.sql);
    });
}
