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
const Pag = require('./Models/PagModel')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend:true}))
app.use(bodyParser.json());
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


app.post('/saveclient',function(req,res,next){

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
    next()
}) 

 
        })

        app.get('/getcart',(req,res)=>{
          Cart.findAll().then((r)=>{
            res.send(r)
          })
        })

      app.post('/savecart',(req,res, next)=>{
       
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
          else{
          res.status(200).send(cart)
          next()
          }
      }) 
    }
   
      })

   app.post('/savepag',(req,res, next)=>{
     p = new Pag({
       IDOS: req.body.IDOS,
       FORMA:req.body.FORMA,
       PARCELA:req.body.PARCELA,
       TOTAL:req.body.TOTAL,
       PAGO:req.body.PAGO,
       RESTANTE:req.body.RESTANTE
     })
     p.save((err,pg)=>{
       if(err)
       res.status(500).send(err)
       else
       res.status(200).send(pg)
       next()
     })
     
   })   


   app.get('/getpag/:id',(req,res)=>{
     Pag.findAll({where:{IDOS:req.params.id}}).then((p)=>{
       res.send(p)
     })
   })
app.post('/saveservico',(req,res,next )=>{
  s = new Servico({
    NOME:req.body.descricao,
    LUCRO:req.body.lucro,
    PRECODEVENDA:req.body.valor,
    GANHODONO:req.body.ganhodono,
    GANHOFUN:req.body.ganhoFuncionario,
    CODVERIF:Math.floor(Math.random() * 999999)
  })


  s.save((err, servico)=>{
    if(err)
    res.status(500).send(err)
    else{
    res.status(200).send(servico)
    next()
    }
}) 

})
app.get('/listserv',(req,res)=>{
  Servico.findAll().then((s)=>{
    res.send(s)
  })
})

app.delete('/deleteserv/:id',(req,res, next)=>{
  Servico.destroy({where:{'id':req.params.id}}).then(()=>{
  })
  
})
app.delete('/deleteOs/:id',(req,res, next)=>{
  OrdemService.destroy({where:{'id':req.params.id}}).then(()=>{
  })
})
app.delete('/deletecart/:id/:id1',(req, res, next)=>{
 
Cart.destroy({where:{'CODVERIF':req.params.id, 'IDOS':req.params.id1}}).then(()=>{  })

})
app.delete('/deleteprod/:id',(req,res, next)=>{
  Product.destroy({where:{'id':req.params.id}}).then(()=>{
  })
 
})
app.get('/listfun',(req,res, next)=>{
  Funcionario.findAll().then((funci)=>{
    res.send(funci)
  })
})
app.delete('/deletclient/:id',(req,res)=>{
  Client.destroy({where:{'id':req.params.id}}).then(()=>{
  })
})
app.post('/savefuncionario',(req,res, next)=>{
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
      next()
    })
  },2000)
  
})
app.patch('/list/:id', function(req,res, next){
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
        next()
      })
    
    })


})
app.patch('/editStt/:id',(req,res)=>{

  OrdemService.findOne({where:{'id':req.params.id}}).then((os)=>{
    os.STATUS=req.body.STATUS
    
   os.save((err, os)=>{
    if(err)
    res.status(500).send(err)
    else
    res.status(200).send(os)
  })
  })

})
app.patch('/editObs/:id',(req,res, next)=>{

  OrdemService.findOne({where:{'id':req.params.id}}).then((os)=>{
    os.OBS=req.body.OBS
    
   os.save((err, os)=>{
    if(err)
    res.status(500).send(err)
    else
    res.status(200).send(os)
    next()
  })
  })

})
app.patch('/addqtd/:id/:id1/:id2',(req,res, next)=>{
  
  Cart.findOne({where:{'CODVERIF':req.params.id, 'IDOS':req.params.id1, 'id':req.params.id2}}).then((c)=>{
    
    for(let key in req.body.item){
    c.NOME=req.body.item[key].NOME,
    c.PRECODEVENDA=req.body.item[key].PRECODEVENDA,
    c.totalPrice=req.body.totalPrice,
    c.totalQtd=req.body.totalQtd,
    c.CODVERIF=req.body.CODVERIF
    }
    c.save((err,cart)=>{
      if(err)
      res.status(500).send(err)
      else
      res.status(200).send(cart)
      next()
    })
  })

})
app.post('/saveProduct', function(req,res, next){
  p = new Product({
    COD_BARRA:req.body.codBarras,
    NOME: req.body.name,
    MARCA:req.body.marca,
    EMPRESA: req.body.Empresa,
    QTD: req.body.qtd,
    PRECODECOMPRA: req.body.precoDeCompra,
    PRECODEVENDA:req.body.precoDeVenda,
    LUCRO:req.body.lucro,
    CODVERIF:Math.floor(Math.random() * 9999999)
    
  })

    p.save((err,prod)=>{
      if(err)
      res.status(500).send(err)
      else
      res.status(200).send(prod)
      next()
    })

})

app.get('/getproducts',function(req,res){
  Product.findAll().then((p)=>{
    res.send(p)
  })

})

app.get('/listosall',(req,res)=>{
    OrdemService.findAll({where:{STATUS:['Aprovado','Espera','Entregue']},order: [
      ['id', 'DESC'], 
],}).then((o)=>{
    res.send(o)
  })
})
app.get('/listosneg',(req,res)=>{
  OrdemService.findAll({where:{STATUS:['Negado']},order: [
    ['id', 'DESC'], 
],}).then((o)=>{
  res.send(o)
})
})
app.get('/listosfin',(req,res)=>{
  OrdemService.findAll({where:{STATUS:['Finalizado']},order: [
    ['id', 'DESC'], 
],}).then((o)=>{
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
app.post('/saveos',(req,res, next)=>{
 
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
      IDFUNCIONARIO:req.body.IDFUNCIONARIO,
      STATUS:'Espera'
    })

   
   os.save((err,o)=>{
      if(err)
      res.status(500).send(err)
      else
      res.status(200).send(o)
      next()
    })

    

})


app.listen(3000, function(){
  console.log("subindo")
});

