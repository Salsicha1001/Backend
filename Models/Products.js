const db = require('../Conect/conection')

const Product = db.sql.define('Product',{
    COD_BARRA : {
        type:db.Sequelize.STRING
    },
    NOME : {
        type:db.Sequelize.STRING
    },
    EMPRESA : {
        type:db.Sequelize.STRING
    },
    MARCA : {
        type:db.Sequelize.STRING
    },
    QTD : {
        type:db.Sequelize.INTEGER
    },
    PRECODECOMPRA : {
        type:db.Sequelize.DOUBLE
    },
    PRECODEVENDA : {
        type:db.Sequelize.DOUBLE
    }, 
    LUCRO:{
        type:db.Sequelize.INTEGER
    },
    CODVERIF:{
        type:db.Sequelize.INTEGER
    }

    
    
});
//Product.sync({})
module.exports = Product