const gateway = require('fast-gateway')
const port = 9000;


const server = gateway({
    routes: [{
      prefix: '/air',
      target: 'http://localhost:8000/'
    },{
        prefix: '/ocean',
        target: 'http://localhost:8001/'
    },{
        prefix: '/road',

        target: 'http://localhost:8002/'

    }]
  })
  server.get("/mytesting",(req,res)=>{
    res.send("you called gateway")
  })
  server.start(port).then(server=>{
    console.log(`API Gateway listening on port ${port}`)
  }).catch(e=>{
    console.log(e)
  })