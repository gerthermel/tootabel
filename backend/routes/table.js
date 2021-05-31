const express = require('express');
const db = require('../modules/db');
const session = require('express-session');
const router = express.Router();
const sess = require('../middleware/session');
const md5 = require('md5');
const permissions = require('../modules/permissions')
const dateFormat = require('dateformat');
const mongoose = require('mongoose');
const Hours = require('../models/hours');

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/:id/hours/:month/:year',  async (req, res)=>{
  var month = parseInt(req.params.month);
  var year = req.params.year;
  var myId = sess.get('userId');
  var companyId = req.params.id;
  var pipeLine = [
    {
      '$match': {
        'year.name': `${year}`, 
        'year.month.name': `${month}`, 
        'year.month.day.tyymaa.company_id': `${companyId}`, 
        'year.month.day.tyymaa.user_id': `${myId}`
      }
    }
  ]
  Hours.aggregate(pipeLine, function (err, docs) {
    try{
      var data = docs;
      var calendarArray = {};
      var now = new Date();
      var currentDay = now.getDate();
      var currentDate = now.getDate();
      var currentMonth = now.getMonth();
      var currentYear = now.getFullYear();
      for(let y = currentYear;y <= currentYear; y++){
        calendarArray[y] = {};
        for(let m = 0;m <= 11; m++){
          calendarArray[y][m] = {};
          var days = new Date(y, m+1, 0).getDate(); 
          for (let d = 1; d <= days; d++) {
            console.log(calendarArray[y][m])
            calendarArray[y][m][d] = {};
            
          }
        }
      }
      var hours = 0;
      var tyymaad = [];
      for(let item of docs){
        var year = item.year.name;
        var month = item.year.month.name;
        var day = item.year.month.day.name;
        var metaData = item.year.month.day.tyymaa
        calendarArray[year][month][day][metaData.name] = {'task': metaData.tasks, 'hours': metaData.hours};
        hours = hours + metaData.hours;
        tyymaad.push(metaData.name)
      }
      res.status(200).send({data: calendarArray, hours: hours, tyymaad: tyymaad})
    }catch(err){
      console.error(err);
      res.status(400).send({message: 'Get Hours Database Error #1'})
    }
  })
  return;

})

router.post('/new-entry', async (req, res) => {
  var data = req.body.form;
  var date = new Date(data['date'].trim())
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var doc = [{
    year: {
      name: `${year}`,
      month:{
        name: `${month}`,
        day: {
          name: `${day}`,
          tyymaa:{
            name: data['tyymaa'].trim(),
            tasks: data['tasks'].trim(),
            hours: data['hours'].trim(),
            user_id: sess.get('userId'),
            company_id: data['company_id'].trim(),
          }
        }
      }
    }
  }]
  Hours.create(doc).then( function(company){
    try{
      console.log(company);
      res.status(200).send(company);
    } catch(err){
      console.log(err)
    }
  })
})


module.exports = router;

