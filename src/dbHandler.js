const mysql = require('mysql')
const logger =  require('./log')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '123',
  database: 'SPORT_RECORD'
})

const tableName = "SPORT_RECORD.record"
const countField = 'count';

function queryDb(req, res){
  connection.connect(function(err) {
    if (err) {
      logger.error('error connecting: ' + err.stack)
      return;
    }
  
    logger.info('connected as id ' + connection.threadId);
  });

  connection.query('select * from  SPORT_RECORD.record', (err, rows, fields) => {
    if (err) {
      logger.error('error connecting: ' + err.stack)
      return;
    }
    logger.info('The solution is: ', rows[0].solution)
    res.send(rows)
  })

  connection.end()
}

function insertRecord(req, res){
  // 要插入的数据
  var sql = "SELECT * FROM `SPORT_RECORD.record` WHERE `openid` = ?";
  connection.query(sql, [req.query.openid], function (error, results, fields) {
    if (err) {
      logger.error('error connecting: ' + err.stack)
      return;
    }
    if (results.length > 0) {
      var sql_update = `UPDATE ${tableName}
      SET ${countField} = ${countField} + 1
      WHERE openid = ?
      LIMIT 1`;
      connection.query(sql_update, [openid], function (error, results, fields) {
        if (error) {
          logger.error('error connecting: ' + errors.stack)
          return;
        }
        res.send('success');
      });
    } else {
      var sql_insert = "INSERT INTO `SPORT_RECORD.record` (`openid`, `count`) VALUES (?, ?)";
      connection.query(sql_insert, [openid, 1], function (error, results, fields) {
        if (err) {
          logger.error('error connecting: ' + err.stack)
          return;
        }
        res.send('success');
      });
    }
  });
  connection.end()
}
module.exports = {
  queryDb,
  insertRecord
}

