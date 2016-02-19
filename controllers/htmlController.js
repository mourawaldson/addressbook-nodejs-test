var bodyParser = require('body-parser');
var mysql = require('mysql');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "notifications"
});

module.exports = function(app) {

    app.get('/', function(req, res) {
        var projects = [];
        var query = con.query('SELECT * FROM projects', function(err, rows, fields) {
            if (err) {
                throw err;
            } else {
                for (var i in rows) {
                    projects.push({name: rows[i].name});
                }
            }
            res.render('index', { serverProjects: projects });
        })
    });

    app.get('/project/:id', function(req, res) {
        res.render('project', { ID: req.params.id, Qstr: req.query.qstr });
    })

    app.post('/project', urlencodedParser, function(req, res) {
        var data  = {name: req.body.name};
        var query = con.query('INSERT INTO projects SET ?', data, function(err, result) {
            if (err) {
                console.error(err);
            }
        })
        res.redirect('/');
    })
};
