
const db = require('../Conect/conection')

const Clients = db.sql.define('Clients',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
      },
    NAME : {
        type:db.Sequelize.STRING 
    },
    CPF : {
        type:db.Sequelize.STRING
    },
    DATE : {
        type:db.Sequelize.STRING
    },
    TELL : {
        type:db.Sequelize.STRING
    },
    EMAIL : {
        type:db.Sequelize.STRING
    },
    PESSOA : {
        type:db.Sequelize.STRING
    },
    CEP : {
        type:db.Sequelize.STRING
    },
    BAIRRO : {
        type:db.Sequelize.STRING
    },
    RUA : {
        type:db.Sequelize.STRING
    },
    ESTADO : {
        type:db.Sequelize.STRING
    },
    NUMERO : {
        type:db.Sequelize.STRING
    },
    COMPLEMENTO : {
        type:db.Sequelize.STRING
    },
    CIDADE : {
        type:db.Sequelize.STRING
    },
  

        
    
    
});
//Clients.sync({force:true})
module.exports = Clients