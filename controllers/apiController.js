module.exports = function(app) {

	app.get('/api/person/:id', function(req, res) {
	// get that data from database
		res.json({ firstname: 'John', lastname: 'Doe' });
	});

	app.post('/api/person', function(req, res) {
		console.log('testandoxxx');
        res.send('Thank you!');
	});

	app.delete('/api/person/:id', function(req, res) {
		// delete from the database
	});

}
