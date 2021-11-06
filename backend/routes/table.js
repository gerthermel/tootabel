const express = require('express');
const db = require('../modules/db');
const session = require('express-session');
const router = express.Router();
const sess = require('../middleware/session');
const md5 = require('md5');
const permissions = require('../modules/permissions')
const dateFormat = require('dateformat');
const formidable = require('formidable');
const moment = require('moment');

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/:id/hours/:month/:year',  async (req, res)=>{
  var month = parseInt(req.params.month)+1;
  var year = req.params.year;
  var myId = sess.get('userId');
  var weeksInMonth = getWeeksInMonth(year,month)
  
  var sql = `
  SELECT
  *
  FROM
    hours
  WHERE 
    company_id ='${req.params.id}' AND 
    worker_id='${myId}' AND
    (date >= "${year}-${month}-01 00:00:00" AND date <= "${year}-${month}-31 00:00:00")
  ORDER BY 
  	date ASC
  `;
  try{
    var data = await db.query(sql);
    var calendarArray = {};
    calendarArray['week'] = weeksInMonth;
    var now = new Date();
    var currentDay = now.getDate();
    var currentDate = now.getDate();
    var currentMonth = now.getMonth();
    var currentYear = now.getFullYear();
    var days = new Date(year, month+1, 0).getDate(); 
    for (let d = 1; d <= days; d++) {
      calendarArray[year+'-'+month+'-'+d] = {}
    }
    var hours = 0;
    var weekHours = 0;
    var tyymaad = []
    var weekNr = getWeekNumber(year+'-'+month+'-'+1);
    for(let item of data){
      var date = new Date(item['date']);
      var day = date.getDate();
      var month = date.getMonth()+1;
      var year = date.getFullYear();
      calendarArray[year+'-'+month+'-'+day][item.id] = item
      hours = hours + item.hours;
      weekHours = weekHours + item.hours;
      calendarArray['week'][weekNr]['hours'] = weekHours;
      if(weekNr !== getWeekNumber(date)){
        weekNr = getWeekNumber(date);
        weekHours = 0;
      }
      tyymaad.push(item.object)
    }
    console.log(calendarArray['week'])
    res.status(200).send({data: calendarArray, hours: hours, tyymaad: tyymaad})
  }catch(error){
    console.error(error);
    res.status(400).send({message: 'Get Hours Database Error #1'})
  }

})

function getWeekNumber(date){
  currentdate = new Date(date);
  var oneJan = new Date(currentdate.getFullYear(),0,1);
  var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
  return result;
}

function  getWeeksInMonth(year, month) {
  var now = new Date();
  const weeks = [],
    firstDate = new Date(year, month, 1),
    lastDate = new Date(year, month + 1, 0),
    numDays = lastDate.getDate();
    let dayOfWeekCounter = firstDate.getDay();

  for (let date = 1; date <= numDays; date++) {
    if (dayOfWeekCounter === 0 || weeks.length === 0) {
      weeks.push([]);
    }
    weeks[weeks.length - 1].push(date);
    
    dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
  }
  var weekNrArray = {};
  weeks.forEach(element => {
    weekNrArray[ getWeekNumber(`${year}-${month}-${element[0]}`) ] = {
      'weekNr': getWeekNumber(`${year}-${month}-${element[0]}`),
      'hours':0,
      'currentWeek': getWeekNumber(`${year}-${month}-${element[0]}`) === getWeekNumber(now) ? true:false,
      'startDate': `${year}-${month}-${element[0]}`,
      'endDate': `${year}-${month}-${ element[element.length-1] }`,
      'start': `${element[0]}`,
      'end': `${ element[element.length-1] }`,
    };
  });
  return weekNrArray;
  /*
  return weeks
    .filter((w) => !!w.length)
    .map((w) => 
      weekNrArray[ getWeekNumber(`${year}-${month}-${w[0]}`] = 
        {
          start: w[0],
          weekNumber: getWeekNumber(`${year}-${month}-${w[0]}`),
          end: w[w.length - 1],
          dates: w,
          hours:0,
        }
    );
    */
}


router.post('/new-entry', async (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, async function(err, fields, files) {
    var h = fields['hours'] || null;
    var sql = `
    INSERT INTO hours 
      SET
      object= '${fields['object'] || ''}',
      hours= ${h},
      date= '${fields['date'] || ''}',
      notes= '${fields['notes'] || ''}',
      company_id= '${fields['company_id']}',
      worker_id= '${sess.get('userId')}'
    `;
    try{
      var retData = await db.query(sql);
      var returnData = fields;
      returnData['id'] = retData.insertId;
      res.status(200).send({data: returnData})
    } catch(err){
      console.log(err);
      res.status(400).send({message: `Database Error: table1`})
      throw new Error(err)
    }
  })
})

router.put('/edit-entry', async (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, async function(err, fields, files) {
    try{
      var sql = `
      UPDATE hours SET
        ${fields['property']} = '${fields['value']}'
      WHERE
        id = ${fields['id']}
      `;
      db.query(sql);
      res.status(200).send()
    }catch(error){
      console.error(error);
      res.status(400).send({message: 'Was not able to save changes'})
    }
  })
})

router.delete('/entry/:id', async (req, res) =>{
  var id = req.params.id;
  var sql = `
  DELETE FROM hours 
  WHERE
    id = ${id}
  `;
  try{
    await db.query(sql);
    res.status(200).send()
  } catch(err){
    res.status(400).send({message: `Database Error: SQL Error`})
    throw new Error(err)
  }
})


module.exports = router;

