const fs=require('fs');
const path=require('path');
fs.writeFile(path.join(__dirname,'Document','subscribe.txt'),'Subscribe To Bala Chandran',(err)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log('The File Is Created');
    }
    fs.appendFile(path.join(__dirname,'Document','subscribe.txt'),'\n \n Thanks For Subscribing Makkalee',(err)=>{
        if(err){
            console.log(err.message);
        }
        else{
            console.log('The File Is Updated');
        }
    })
    fs.rename(path.join(__dirname,'Document','subscribe.txt'),path.join(__dirname,'Document','myFileName.txt'),(err)=>{
        if(err){
            console.log(err.message);
        }
        else{
            console.log('The File Is Renamed');
        }
    })
})