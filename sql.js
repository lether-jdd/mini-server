const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '123',
  database: 'record'
})

function queryDb(req, res){
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('select * from record.healthCount', (err, rows, fields) => {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
    res.send(rows)
  })

  connection.end()
}

module.exports = queryDb

