const log4js =require("log4js")
let logConfig = {
    // 输出到控制台的内容，同时也输出到日志文件中
   replaceConsole: true,
   appenders: {
     'out': {
       type: 'stdout',
       layout: {
         type: "colored"
       }
     },
     'files': {
       type:'file',
       filename: 'testing.log'
     }
   },
   categories: {
     default: {
       appenders: ['out', 'files'],
       level: 'info'
     }
   },
   disableClustering: true
 }
 log4js.configure(logConfig)
 const logger = log4js.getLogger('CHEESE');
 module.exports = logger

