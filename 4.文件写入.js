// 1.导入fs模块
const { log } = require('console')
const fs = require('fs')

//2.写入文件
// fs.writeFile('./zym.txt','三人行，必有我师焉',err=>{
//     if(err){
//         console.log('写入失败');
//         return;
        
//     }
//     console.log('写入成功')
// })

//同步写入
fs.writeFileSync('./data.txt','test')