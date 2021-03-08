// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

const Projects = require('./model');

router.get('/', (req, res, next) => {
  Projects.find()
  .then(projects => {
    projects = projects.map((project) => {
      return {
        ...project,
        completed: !!project.completed
      }
    });
    res.status(200).json(projects)
  })
  .catch((err) => {
   next(err)
    })
  });

router.get('/:id/resources', (req, res,next) => { 
  Projects.findResource(req.params.id)
  .then(resources => {
    res.status(200).json(resources)
  })
  .catch((err) => {
    next(err)
     })
   });

router.post('/', (req, res,next) => {
  Projects.insert(req.body)
  .then(project => {
    project.completed = !!project.completed
    res.status(201).json(project)
  }).catch((err) => {
    next(err)
     })
   });

router.post('/:id/resources', (req, res, next) => {
  Projects.insertResource(req.params.id, req.body)
    .then(resource => {
      res.status(201).json(resource)
    }).catch((err) => {
        next(err)
         })
       });
module.exports = router; 