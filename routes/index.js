var express = require('express');
var router = express.Router();
var fs = require('fs');
var USER = require('../model/user');

let dataJSON = fs.readFileSync('./json/data.json', 'utf-8');


router.get('/', async function(req, res, next) {
  let formData = req.query;
  let data = await USER.find()
  let Data= await USER.findByIdAndDelete()
  if (formData.username && formData.password) {
    try {
      await USER.create(formData);                                                 // f o r  2nd P r o g r a m
      // data.push(formData);                                                         f o r   1st   P r o g r a m
      // fs.writeFileSync("./json/data.json", JSON.stringify(data), 'utf-8');         f o r   1st   P r o g r a m
    } catch (error) {
      console.error("Error creating user:", error);
    }
    return res.redirect('/');
  }

  let del = req.query.del;
  if (del >= 0) {
    data.splice(del, 1);
    fs.writeFileSync("./json/data.json", JSON.stringify(data), 'utf-8');
    return res.redirect('/');
  }

  let up = req.query.up;
  let input = {};
  if (up >= 0) {
    input = data[up];
  }


  res.render('index', { title: 'Student Form', data: data, input: input, up: up ,Data});
});

module.exports = router;