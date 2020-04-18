const db = require('../Conect/conection')

const Funcionario = db.sql.define('FUNCIONARIO',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
      },
    NOME : {
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

//Funcionario.sync({})
module.exports = Funcionario