const fs = require('fs');
const { readFileSync } = require('fs/promises');

const index = fs.readFileSync('index.html', 'utf-8');
// const data = fs.readFileSync('data.json', 'utf-8');

const express = require('express');
const server = express();

server.use((req,res,next)=>{
    console.log(req.get('User-Agent'), req.method,req.ip,req.hostname);
    next()
})

const auth = (req,res,next) => 
{
    console.log()
    if(req.query.password=="123")
    {
        next()
    }else{
        res.sendStatus(401)
    }
}

server.use(auth);

server.get('/', (req, res) => {
    res.json({type: 'GET'});
})

server.post('/',(req,res)=>{
    res.json({type:'POST'})
})

server.put('/',(req,res)=>{
    res.json({type:'PUT'})
})

server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
})

server.patch('/',(req,res)=>{
    res.json({type:'PATCH'});
})

server.listen(8080);
