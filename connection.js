var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dbUser:dbUserPassword@cluster0-plxne.azure.mongodb.net/test";


MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("myNewDatabase");
	dbo.collection("myCollection").findOne({}, function(err, result) {
	  if (err) throw err;
	  console.log(result.name);
	  db.close();
	});
});

