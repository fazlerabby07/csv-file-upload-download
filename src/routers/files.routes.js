const express = require('express');
const router = express.Router();
const csvController = require('../controllers/files/csv.controller');
const upload = require('../middlewares/upload');

let routes = (app) => {
	router.post('/upload', upload.single('file'),csvController.upload);
  router.get("/files", csvController.getFilesData);
  router.get("/download", csvController.download);

	app.use('/api/csv', router);
};

module.exports = routes;
