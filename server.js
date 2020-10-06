const { Console } = require("console")
const express =require("express")
const PORT = 370
const server = express()

server.get('/',(req, res)=>{
    res.status(200).json({
        report: true ,
        Reply: "this is json"
    })


    res.end()
})

server.delete('/:id',(req, res)=>{
    res.status(200).json({
        report: true ,
        Reply: `we are deleting${req.params.id}`
    })


    res.end()
})

server.get('/:id',(req, res)=>{
    res.status(200).json({
        report: true ,
        Reply: `this is for${req.params.id}`
    })


    res.end()
})

server.put('/:id',(req, res)=>{
    res.status(200).json({
        report: true ,
        Reply: `i am editing ${req.params.id}`
    })


    res.end()
})

server.post('/:id',(req, res)=>{
    res.status(200).json({
        report: true ,
        Reply: `we are adding ${req.params.id}`
    })


    res.end()
})


server.listen(PORT,()=>{
    console.log(`server is listening to port 370`)
})