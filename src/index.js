const express = require('express')
const dbHandler  = require('./dbHandler')
const axios = require('axios')
const logger =  require('./log')
const config = require('./config')
const app = express()

const port = 4006

app.get('/', dbHandler.queryDb)
app.get('/addRecord',(req, res)=>{
  dbHandler.insertRecord(req, res)
})
app.get('/get/openid',(req, res)=>{
  logger.info("/get/openid: [params]",req.query)
  axios({
    method: 'get',
    url:'https://api.weixin.qq.com/sns/jscode2session',
    params: {
      appid: config.miniAppConfig.appid,
      secret: config.miniAppConfig.secret,
      js_code: req.params.js_code,
      grant_type: config.miniAppConfig.grant_type,
    }
  }).then(result => {
    logger.info("/get/openid: [result]", result.data)
    res.send(JSON.stringify(result.data))
  }).catch((e)=>{
    logger.info("/get/openid: [error]", JSON.stringify(e))
  }).finally(()=>{})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

