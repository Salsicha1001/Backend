const Sequelize = require('sequelize')
const sql = new Sequelize('teste','root', 'cTbc2011##',{
    host:"localhost",
    dialect:"mysql",
    multipleStatements:true
})

var test = sql.authenticate()
    .then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log("SOMETHING DONE GOOFED");
    })
    .done();



//Clients.sync()

module.exports = {
    Sequelize:Sequelize,
    sql:sql
}