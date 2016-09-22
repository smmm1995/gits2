var express=require('express')
var app=express()
var bodyparser=require('body-parser')
var multer=require('multer')
var form=multer()
var fs=require('fs')
app.use(express.static('wwwroot'))
app.use(bodyparser.urlencoded({extended:false}))
app.listen(1000,function(){
    console.log('server is running')
})
//设置请求的处理和响应
app.post('/login',form.array(),function(req,res){
    res.send('chengg')
    fs.exists('data',function(exists){
        if(!exists){
            fs.mkdir('data')
        }
        var body=req.body
        var mess={
            body


        }
        mess=JSON.stringify(mess)
        console.log(mess)
        fs.appendFile('data/mm.txt',mess+',',function(error){
            if(error) {
                console.log('保存失败')
            }
            else{
                console.log('保存成功')
            }``
        })
    })
})
//处理get请求及响应
app.get('/login',function(req,res){
//    读取文件的前提是判断当前文件是否存在
    fs.exists('data',function(exists){
        if(exists){
            //读取文件夹中某个文件的内容
            fs.readFile('data/mm.txt',function(error,data){
                if(data){
                    res.send(data)
                }                else{
                    res.send('获取数据失败')
                }
            })
        }
    })
})