var express=require('express')
var bodyparser=require('body-parser')
const app=express();
app.set("view engine","ejs");
app.set("views","./src/views")
app.use(bodyparser.urlencoded({extended:true}))
var bookar=[{name:"book1",author:"auth1"},{name:"book2"}]
app.get("/",function(req,res){
    res.render("login")
})
app.post("/home",function(req,res){
   if( req.body.pass== "@123"){
    res.render("home",{user:req.body.uname})}
    else{
        res.redirect("/")
    }
})
app.get("/book",function(req,res){
    res.render("book",{book:bookar})
})
app.listen(8080,function(req,res){
    console.log("server loading..")
})