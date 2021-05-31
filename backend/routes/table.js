const express = require('express');
const db = require('../modules/db');
const session = require('express-session');
const router = express.Router();
const sess = require('../middleware/session');
const md5 = require('md5');
const permissions = require('../modules/permissions')
const dateFormat = require('dateformat');

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/:id/hours/:month/:year',  async (req, res)=>{
  var month = parseInt(req.params.month)+1;
  var year = req.params.year;
  var myId = sess.get('userId');
  var sql = `
  SELECT
  *
  FROM
  hours
  WHERE 
    company_id ='${req.params.id}' AND 
    worker_id='${myId}' AND
    (date >= "${year}-${month}-01 00:00:00" AND date <= "${year}-${month}-31 00:00:00")
  `;
  console.log(sql)
  try{
    var data = await db.query(sql);
    var calendarArray = {};
    var now = new Date();
    var currentDay = now.getDate();
    var currentDate = now.getDate();
    var currentMonth = now.getMonth();
    var currentYear = now.getFullYear();
    for(let y = year;y <= currentYear; y++){
      calendarArray[y] = {};
      for(let m = 0;m <= 11; m++){
        calendarArray[y][m] = {};
        var days = new Date(year, month+1, 0).getDate(); 
        for (let d = 1; d <= days; d++) {
          calendarArray[y][m][d] = {};
        }
      }
    }
    var hours = 0;
    var tyymaad = []
    for(let item of data){
      var date = new Date(item['date']);
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      console.log(date.getMonth())
      calendarArray[year][month][day][item.object] = {'task': item.notes, 'hours': item.hours};
      hours = hours + item.hours;
      tyymaad.push(item.object)
     
    }
    res.status(200).send({data: calendarArray, hours: hours, tyymaad: tyymaad})
  }catch(error){
    console.error(error);
    res.status(400).send({message: 'Get Hours Database Error #1'})
  }

})

router.post('/new-entry', async (req, res) => {

  var data = req.body.form;
var sql = `
INSERT INTO hours 
  SET
  object= '${data['tyymaa'].trim()}',
  hours= '${data['hours'].trim()}',
  date= '${data['date'].trim()}',
  notes= '${data['tasks'].trim()}',
  company_id= '${data['company_id'].trim()}',
  worker_id= '${sess.get('userId')}'
`;
try{
  await db.query(sql);
  res.status(200).send()
} catch(err){
  res.status(400).send({message: `Database Error: table1`})
  throw new Error(err)
}
  
})


module.exports = router;

