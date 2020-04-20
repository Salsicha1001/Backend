const db = require('../Conect/conection')

const Servico = db.sql.define('SERVICO',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
      },
    NOME : {
        type:db.Sequelize.STRING 
    },
    PRECODEVENDA : {
        type:db.Sequelize.DOUBLE
    },
    LUCRO : {
        type:db.Sequelize.INTEGER
    },
    GANHODONO : {
        type:db.Sequelize.DOUBLE
    },
    GANHOFUN : {
        type:db.Sequelize.DOUBLE
    },CODVERIF:{
        type:db.Sequelize.INTEGER
    }
});

//Servico.sync({})
module.exports = Servico