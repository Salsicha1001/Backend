const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require("mysql")
const Client = require('./Models/ClientModel')
const Funcionario = require('./Models/FuncionarioModel')
const Servico = require('./Models/ServicoModel')
const cors = require('cors')
server = require('http').Server(app)
const Product = require('./Models/Products')
const OrdemService = require('./Models/OrderService')
const Cart = require('./Models/CartModel')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend:true}))
app.use(cors())
 
app.use(function(err, req, res, next) {
    return res.send({ "statusCode": util.statusCode.ONE, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG });
    });

    app.use(function(req, res, next) {
        next();
        });
app.get('/list',function(req,res){
    Client.findAll().then((client)=>{
      res.send(client)
   
    })
  
})


app.post('/saveclient',function(req,res){

 c = new Client({
  NAME : req.body.NAME,
  CPF :req.body.CPF,
  DATE : req.body.DATE,
  TELL : req.body.TELL,
  EMAIL :req.body.EMAIL,
  PESSOA : req.body.PEOPLE,
  CEP:req.body.CEP.cep,
  BAIRRO:req.body.CEP.bairro,
  RUA:req.body.CEP.logradouro,
  ESTADO:req.body.CEP.estado,
  CIDADE:req.body.CEP.cidade,
  COMPLEMETO:req.body.CEP.complemento,
  NUMERO:req.body.CEP.numero
})
c.save((err, cliente)=>{
    if(err)
    res.status(500).send(err)
    else
    res.status(200).send(cliente)
}) 

 
        })

        app.get('/getcart',(req,res)=>{
          Cart.findAll().then((r)=>{
            res.send(r)
          })
        })
      app.post('/savecart',(req,res)=>{
        for(let key in req.body.item){
       c = new Cart({
          IDOS:req.body.idos,
          NOME:req.body.item[key].NOME,
          PRECODEVENDA:req.body.item[key].PRECODEVENDA,
          totalPrice:req.body.totalPrice,
          totalQtd:req.body.totalQtd,
          CODVERIF:req.body.CODVERIF
        })
        c.save((err, cart)=>{
          if(err)
          res.status(500).send(err)
          else
          res.status(200).send(cart)
      }) 
    }
      })
app.post('/saveservico',(req,res)=>{
  s = new Servico({
    NOME:req.body.descricao,
    LUCRO:req.body.lucro,
    PRECODEVENDA:req.body.valor,
    GANHODONO:req.body.ganhodono,
    GANHOFUN:req.body.ganhoFuncionario,
    CODVERIF:Math.floor(Math.random() * 65536)
  })


  s.save((err, servico)=>{
    if(err)
    res.status(500).send(err)
    else
    res.status(200).send(servico)
}) 
})
app.get('/listserv',(req,res)=>{
  Servico.findAll().then((s)=>{
    res.send(s)
  })
})

app.delete('/deleteserv/:id',(req,res)=>{
  Servico.destroy({where:{'id':req.params.id}}).then(()=>{
  })
})
app.delete('/deletecart/:id',(req, res)=>{
  Cart.destroy({where:{'id':req.params.id}}).then(()=>{
  })
})
app.delete('/deleteprod/:id',(req,res)=>{
  Product.destroy({where:{'id':req.params.id}}).then(()=>{
  })
})
app.get('/listfun',(req,res)=>{
  Funcionario.findAll().then((funci)=>{
    res.send(funci)
  })
})

app.post('/savefuncionario',(req,res)=>{
  f = new Funcionario({
    NOME:req.body.NOME,
    CPF:req.body.CPF,
    DATE : req.body.DATE,
    TELL : req.body.TELL,
    EMAIL :req.body.EMAIL,
    CEP:req.body.CEP.cep,
    BAIRRO:req.body.CEP.bairro,
    RUA:req.body.CEP.logradouro,
    ESTADO:req.body.CEP.estado,
    CIDADE:req.body.CEP.cidade,
    COMPLEMETO:req.body.CEP.complemento,
    NUMERO:req.body.CEP.numero
  })
  setTimeout(function(){
    f.save((err,func)=>{
      if(err)
      res.status(500).send(err)
      else
      res.status(200).send(func)
    })
  },2000)
})
app.patch('/list/:id', function(req,res){
    Client.findOne({id:req.params.id}).then((cliente)=>{
    
      cliente.NAME = req.body.NAME
      cliente.CPF = req.body.CPF
      cliente.DATE = req.body.DATE
      cliente.NUMBER = req.body.TELL
      cliente.EMAIL = req.body.EMAIL
      cliente.PESSOA = req.body.PEOPLE
      cliente.CEP = req.body.CEP.cep
      cliente.BAIRRO = req.body.CEP.bairro
      cliente.ESTADO = req.body.CEP.estado
      cliente.RUA = req.body.CEP.logradouro
      cliente.NUMERO = req.body.CEP.numero
      cliente.COMPLEMETO = req.body.CEP.complemento
      cliente.CIDADE = req.body.CEP.cidade
      
      cliente.save((err,cliente)=>{
        if(err)
        res.status(500).send(err)
        else
        res.status(200).send(cliente)
      })
    
    })
 

})

app.post('/saveProduct', function(req,res){
  p = new Product({
    COD_BARRA:req.body.codBarras,
    NOME: req.body.name,
    MARCA:req.body.marca,
    EMPRESA: req.body.Empresa,
    QTD: req.body.qtd,
    PRECODECOMPRA: req.body.precoDeCompra,
    PRECODEVENDA:req.body.precoDeVenda,
    LUCRO:req.body.lucro,
    CODVERIF:Math.floor(Math.random() * 65536)
    
  })

    p.save((err,prod)=>{
      if(err)
      res.status(500).send(err)
      else
      res.status(200).send(prod)
    })

})

app.get('/getproducts',function(req,res){
  Product.findAll().then((p)=>{
    res.send(p)
  })

})

app.get('/listosall',(req,res)=>{
  OrdemService.findAll().then((o)=>{
    res.send(o)
  })
})

app.get('/listos/:id',(req,res)=>{
    console.log(req.params.id)
    a = req.params.id
    OrdemService.findOne({where:{id:a}}).then((o)=>{
     // console.log(o)
      res.send(o)
    })
})
app.post('/saveos',(req,res)=>{
 
    os = new OrdemService({
      CLIENTE:req.body.CLIENTE,
      PLACA:req.body.PLACA,
      MODELO:req.body.MODELO,
      MARCA:req.body.MARCA,
      ANO:req.body.ANO,
      FUNCIONARIO:req.body.FUNCIONARIO,
      DATEI:req.body.DATEI,
      DATEP:req.body.DATEP,
      OBS:req.body.OBS,
      IDCLIENT:req.body.IDCLIENT,
      IDFUNCIONARIO:req.body.IDFUNCIONARIO
    })

    console.log(os)
    os.save((err,os)=>{
      if(err)
      res.status(500).send(err)
      else
      res.status(200).send(os)
    })

})
//async function generate(){
  //  for(let i=0; i<10;i++ ){
 //   let p = new Client({
 //       NAME : Faker.commerce.productName()
  //  })
   // try{
  //  await p.save()
  //  }
   // catch(err){
  //      console.log(err)
 //   }
//}
//}
app.listen(3000, function(){
  console.log("subindo")
});


//generate().then(()=>{
 //   console.log("ok")
//})