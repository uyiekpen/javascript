const http = require("http")
const { on } = require("process")
const port = 2000
const family =[
    {"name":"osazie"},
    {"name":"osaro"},
    {"name":"osayeti"},
    {"name":"osemudiamen"},

]
const Server = http.createServer((req , res )=>{
    res.setHeader("Content-Type" , "Application/json")
    console.log("server is ready")
    console.log(req.headers.authorization)

    //let body=[];
    //req
    //.on("data", (chunk)=> {
    //    body.push(chunk);
   // })
    //.on("end", ()=>{
    //    body = Buffer.concat(body).toString();
    //    console.log(body)
   // });

   //res.write("hello,welcome to peter world ")
   res.write(JSON.stringify(family))

    
    res.end()
})

Server.listen(port, ()=>{
    console.log(`server is listening to the port 2000` )
})