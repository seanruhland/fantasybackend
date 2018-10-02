const express = require('express')
const mysql = require('mysql')

//Create connection

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Shinner24!',
  database : 'fantasymysql'
});

//Connect
db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('MySql connected')
})

const app = express()

//Create DB
app.get('/creatdb', (req,res) => {
  let sql = 'CREATE DATABASE fantasymysql'
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result)
    res.send('database created...')
  })
})

//Create table
app.get('/createteamstable', (req, res) => {
    let sql = 'CREATE TABLE teams(id int AUTO_INCREMENT, title VARCHAR(255), players VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('teams table created...');
    });
});

app.listen('3000', () => {
  console.log('server started on port 3000')
})