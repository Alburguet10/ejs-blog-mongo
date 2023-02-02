const { render } = require('ejs');
const express = require('express');
const Posts = require('../model/Posts');
const router = express.Router();
//const Task = require('../model/task');


router.get('/', async function(req,res){
   // (1) Consulta a la BD para recuperar todas los posts
   let posts = await Posts.find()
    res.render("index", {posts})
});


router.get('/newPost', async (req,res) =>{
  let posts = await Posts.find()
  res.render('newPost');
});

// Agregar nuevos Posts
router.post('/newPost', async function(req,res){

  let posts = new Posts(req.body)
  await posts.save()
  res.redirect("/")
})

//Editar Posts
router.get('/edit/:id', async function(req,res){

  let id = req.params.id
  let posts = await Posts.findById(id)
  res.render("edit",{posts})   
})

router.post('/edit/:id', async function(req,res){

  let id = req.params.id
  await Posts.updateOne({_id: id}, req.body)
  res.redirect("/")
})

//Eliminar Posts
router.post('/delete/:id', async function(req,res){

  let id = req.params.id
  await Posts.remove({_id: id})
  res.redirect("/")
})

router.get('/delete/:id', async function(req,res){

  let id = req.params.id
  let posts = await Posts.findById(id)
  res.render("delete",{posts})
})


module.exports = router;