
const db = require('../Conect/conection')

const OrdemService = db.sql.define('OrdemService',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
      },
    CLIENTE : {
        type:db.Sequelize.STRING ,
        
    },
    IDCLIENT : {
        type:db.Sequelize.INTEGER ,
        allowNull: false,
        references: {      
          model: 'clients',
          key: 'id'
        }
    },
    MARCA : {
        type:db.Sequelize.STRING
    },
    MODELO : {
        type:db.Sequelize.STRING
    },
    ANO : {
        type:db.Sequelize.STRING
    },
    PLACA : {
        type:db.Sequelize.STRING
    },
    FUNCIONARIO : {
        type:db.Sequelize.STRING
    },
    IDFUNCIONARIO : {
        type:db.Sequelize.INTEGER,
        allowNull: false,
        references: {      
          model: 'funcionarios',
          key: 'id'
        }
    },
    DATEI : {
        type:db.Sequelize.STRING
    },
    DATEP : {
        type:db.Sequelize.STRING
    },
    OBS : {
        type:db.Sequelize.STRING
    },
        
    STATUS:{
        type:db.Sequelize.STRING
    }
    
});
//OrdemService.sync({force:true})
module.exports = OrdemService