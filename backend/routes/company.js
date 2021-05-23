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

router.get('/my-companies',  async (req, res)=>{
  var myId = sess.get('userId');
  var sql = `
  SELECT
    company.*,
    company_permissions.permission,
    company_permissions.value
  FROM company
  LEFT JOIN company_workers ON company_workers.company_id=company.id
  LEFT JOIN company_permissions ON company_workers.permission = company_permissions.id
  WHERE company_workers.user_id = '${myId}'
  `;
  try{
    var data = await db.query(sql);
    res.status(200).send(data)
  }catch(error){
    console.error(error);
    res.status(400).send({message: 'Get Companies Database Error #1'})
  }

})

router.get('/:id', async (req, res)=>{
  var id = req.params.id
  var sql = `
  SELECT
  *
  FROM
  company
  WHERE id ='${id}'
  `;
  try{
    var data = await db.query(sql);
    res.status(200).send(data)
  }catch(error){
    console.error(error);
    res.status(400).send({message: 'Get Company Database Error #1'})
  }
})

router.post('/create', async (req, res) => {

var name = req.body.form['name'].trim();
var now = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
var sql = `
INSERT INTO company 
  SET
  name= '${name}'
`;
try{
  result = await db.query(sql);
} catch(err){
  res.status(400).send({message: `Database Error 3`})
  throw new Error(err)
}
  var companyId = result.insertId;
  console.log(result);
  var leader = await permissions.defaultPerm('leader');
  var coleader = await permissions.defaultPerm('co-leader');   
  var veterans = await permissions.defaultPerm('veteran');   
  var members = await permissions.defaultPerm('member');   
  var freshs = await permissions.defaultPerm('fresh');   

  var sql = `INSERT INTO company_permissions
  (company_id, user_id, permission, value) VALUES 
  ("${companyId}", "${ sess.get('userId') }", "leader", "${ leader }"),
  ("${companyId}", "${ sess.get('userId') }", "co-leader","${ coleader }"),
  ("${companyId}", "${ sess.get('userId') }", "veteran","${ veterans }"),
  ("${companyId}", "${ sess.get('userId') }", "member","${ members }"),
  ("${companyId}", "${ sess.get('userId') }", "fresh","${ freshs }")
  `;
  try{
    var permissionsQuery = await db.query(sql)
    var sql = `SELECT id FROM company_permissions WHERE company_id = "${companyId}" AND permission="leader"`;
    var rightsGroup = await db.query(sql)
    rightsGroup = rightsGroup[0]['id']

      var sql = `
      INSERT INTO company_workers
      SET
      user_id = '${ sess.get('userId') }',
      company_id = '${ companyId }',
      status = 'approved',
      permission = '1',
      permission_id = '${ rightsGroup }',
      occured = '${ now }'
      `;
      try{
          var company_workers_data = await db.query(sql)
          var returnData = {
            id: companyId,
            name: name,
            permission:'leader',
            value: leader
          }
          res.status(200).send({
            returnData
          })
      } catch(err){

        res.status(400).send({message: `Database Error 6`})
      }
  } catch(err){
      console.log(err)
      res.status(400).send({message: `Database Error 5`})
  }
})


module.exports = router;

