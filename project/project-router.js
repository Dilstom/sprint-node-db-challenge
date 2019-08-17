const express = require('express');
const ProjectDb = require('./project-model');

const router = express.Router();

router.get('/', async (req, res) => {
 try {
  const projects = await ProjectDb.find();
  res.status(200).json(projects);
 } catch (err) {
  res.status(500).json({ message: 'Failed to load all projects', err });
 }
});

router.post('/', async (req, res) => {
 try {
 } catch (err) {
  res.status(500).json({ message: 'Failed to post the project' });
 }
});
module.exports = router;
