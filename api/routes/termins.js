const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/termins', (req, res) => {
	db.Termins
		.find()
		.then((data) => {
			res.json(data);
		})
		.catch((e) => res.send(e));
});

router.get("/termins/:id", (req, res)=>{
    db.Termins
        .findById(req.params.id)
        .then((data) => {
			res.json(data);
		})
		.catch((e) => res.send(e));
})

router.post('/termins', (req, res) => {
	db.Termins
		.find({ date: req.body.date, time: req.body.time })
		.then((data) => {
			if (data.length === 0) {
				db.Termins
					.create(req.body)
					.then((newTermin) => {
						res.status(201).json(newTermin);
					})
					.catch((err) => {
						res.send(err);
					});
			} else {
				throw new Error('Termin je zauzet');
			}
		})
		.catch((err) => {
			console.log('err iz parent catch-a');
			console.log(err);
		});
});

router.put('/termins/:id', (req, res) => {
	db.Termins
		.findByIdAndUpdate(req.params.id, req.body)
		.then((terminsLeft) => {
			res.status(201).json(terminsLeft);
		})
		.catch((err) => {
			res.send(err);
		});
});

router.delete('/termins/:id', (req, res) => {
	// res.send(req.params.id)
	db.Termins
		.findByIdAndDelete(req.params.id)
		.then((terminsLeft) => {
			res.status(201).json(terminsLeft);
		})
		.catch((err) => {
			res.send(err);
		});
});

module.exports = router;
