const db = require('../Conect/conection')

const Product = db.sql.define('Product',{
    COD_BARRA : {
        type:db.Sequelize.STRING
    },
    NOME : {
        type:db.Sequelize.STRING
    },
    MARCA : {
        type:db.Sequelize.STRING
    },
    QTD : {
        type:db.Sequelize.INTEGER
    },
    PRICE : {
        type:db.Sequelize.DOUBLE
    }

    
    
});
//Product.sync({})
module.exports = Product