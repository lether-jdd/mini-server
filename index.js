const express = require('express')
const queryDb  = require('./sql')

const app = express()

const port = 4002

app.get('/', queryDb)
app.get('/re', (req, res)=>{
  console.log(1111222,{req: req.query})
  if(req.query.test == '1'){
    res.location('https://api.mobile.meituan.com/qrcode/rebate?code=14149373671427');
    res.statusCode = 301;
  res.end('响应的内容');
  }else{
    console.log(111122)
    
    // res.send('响应的内容');
   
    // res.location('https://i.meituan.com/platform/qr/r?secretKey=OGFlMzI4YmMt');
    // res.location('https://apimobile.meituan.com/qrcode/dprebate?code=02026365253630');
    // res.location('weixin://dl/business/?appid=wx4a8fea5c56a81640&path=pages/redirect/redirect&query=channel%3Dcommon%26from%3Dcommon%26type%3DtoPage%26params%3Durl%253D%252Fpages%252FcouponList%252FcouponList%253FbizOrigin%253Dbuquan&env_version=release')
    res.location('https://i.meituan.com/awp/hfe/block/42a1ecd63132/185885/index.html?key=7f114e27fa9ce01c3a2ec73090bf55e5')
    res.statusCode = 301;
    res.end('响应的内容');
  }
  // 
  
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

