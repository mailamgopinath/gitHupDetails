// const http=require('http');
// const fs=require('fs');
// function myReqListener(req,res){
//     console.log('The Request Is Created');
//     res.setHeader('Content-Type','text/html');
//     let myPath='./myDocument/';
//     if(req.url=='/'){
//         myPath=myPath+'index.html';
//     }
//     else if(req.url=='/home'){
//         res.statusCode=301;
//         res.setHeader('Location','/');
//         res.end();
//     }
//     else if(req.url=='/ganesh'){
//         myPath=myPath+'ganesh.html';
//     }
//     else if(req.url=='/yoga'){
//         myPath=myPath+'yoga.html';
//     }
//     else if(req.url=='/varshitha'){
//         myPath=myPath+'varshitha.html';
//     }
//     else{
//         myPath=myPath+'notFound.html';
//         res.statusCode=404;
//     }
//     fs.readFile(myPath,(err,data)=>{
//         if(err){
//             console.log(err.message);
//             res.end();
//         }
//         else{
//             res.write(data);
//             res.end();
//         }
//     })
// }
// const myHttp=http.createServer(myReqListener);
// myHttp.listen(3000,()=>{
//     console.log('The Server Is Listening');
// })
const http=require('http');
const myFile=require('fs');
function myListener(req,res){
    console.log('The request Is Created');
    res.setHeader('Content-Type','text/html');
    let path='./myDocument/';
    if(req.url=='/'){
        path+='index.html';
    }
    else if(req.url=='/home'){
        res.statusCode=301;
        res.setHeader('Location','/yoga')
        res.end();
    }
    else if(req.url=='/varshitha'){
        path+='varshitha.html'
    }
    else if(req.url=='/yoga'){
        path+='yoga.html';
    }
    else if(req.url=='/ganesh'){
        path+='ganesh.html';
    }
    else{
        path+='notFound.html';
        res.statusCode=404;
    }
    myFile.readFile(path,(err,data)=>{
        if(err){
            console.log(err.message);
            res.end();
        }
        else{
            res.write(data);
            res.end(); 
        }
    })
}
const newHttp=http.createServer(myListener);
newHttp.listen(3000,()=>{
    console.log('Server Is Listening');
});