var express=require('express')

const app=express();
app.get("/",function(req,res){
    res.sendFile(__dirname+"/src/views/home.html")
});
app.get("/books",function(req,res){
    res.send("books")
})
app.get("/emp",function(req,res){
    res.sendFile(__dirname+"/src/views/emp.html")
})
app.get("/emp/perp",function(req,res){
    res.sendFile(__dirname+"/src/views/perp.html")
})
app.get("/emp/perp/:id",function(req,res){
    res.send("selected employee is "+req.params.id)
})
app.get("/emp/demp",function(req,res){
    res.send("contractors")
})
app.get("/prd",function(req,res){
res.send("product deatails")
})

app.listen(8080,function(req,res){
    console.log("server loading.....")
})