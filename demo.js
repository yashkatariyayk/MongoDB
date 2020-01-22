var MongodbClient = require (MongodbClient);
var url='';

MongodbClient.connect(url,function(err,db){
    
    if(err) 
    throw err;

dbo=db.db("college");
var mydata=[{},{}];

dbo.collection("studentdata").insertMany({},function(err,result){
    if(err) 
    throw err;

    console.log("successful");
    db.close();
});
});