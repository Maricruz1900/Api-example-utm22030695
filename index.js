const express = require ("express")
const app = express()
const port = 3000

app.get("/",(rec,rest)=>{
    rest.send("Hello World")
})

app.listen(port,()=>
{console.log(`app running in port ${port}`)})