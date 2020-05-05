const db = require('../Conect/conection')

const Pag = db.sql.define('PAGAMENTOS',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: db.Sequelize.INTEGER
      },
      IDOS:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {      
          model: 'ordemServices',
          key: 'id'
        }
      },
      FORMA:{
          type:db.Sequelize.STRING
      },
      PARCELA:{
          type:db.Sequelize.INTEGER
      },
      TOTAL:{
          type:db.Sequelize.DOUBLE
      },
      PAGO:{
          type:db.Sequelize.DOUBLE
      },
      RESTANTE:{
          type:db.Sequelize.DOUBLE
      },

    })

      //Pag.sync({})
      module.exports = Pag