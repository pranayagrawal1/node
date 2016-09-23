var mongo = require("mongodb");
var host = "127.0.0.1";
var port = 27017;
var db = new mongo.Db("userschema",new mongo.Server(host,port,{safe: true}));

db.open(function (error){
    console.log("we are connected: "+host+":"+port);

db.collection("user", function(error,collection){
              console.log("we have collection");
console.log(error);
collection.insert({
    name: "Rahul",
    twitter: "rahul",
    email : "akfdsa@gmail.com",
    children : ["abc","xyz"]
}, function(){
    console.log("Succesfully inserted the record");
});
              });
});