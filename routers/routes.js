const express = require('express');
const router = express.Router();
const blogs = require('../static/blogs');

router.get('/new',(req,res)=>{
  res.render('new');
});
router.get('/edit',(req,res)=>{
  res.render('edit');
});
router.get('/blogs',(req,res)=>{
  res.render('blogs',{blogs:blogs});
});

module.exports = router;