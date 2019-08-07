var express=require('express')
const app=express();
app.get("/",function(req,res){
    res.send("welocome")
})
app.listen(8000,function(req,res){
    console.log("server loading")
})
app.get("/emp",function(req,res){
    res.send("employee details")
})

app.get("/books",function(req,res){
    res.send("ab?cdbook id")
})
app.get("/books/poems",function(req,res){
    res.send("poems")
    res.send("eng poems")
})
app.get("/prd",function(req,res){
    res.send("product details")
})