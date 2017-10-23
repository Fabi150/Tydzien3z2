function LocalDb(dbName){
	this._dbName = dbName;
};

LocalDb.prototype.getDbName = function(){
	return this._dbName;
};

LocalDb.prototype.save = function(recordName, recordObj){
	var recordNameInDb = this.getDbName() + "-" + recordName;
	var recordObjInDb = JSON.stringify(recordObj);
	window.localStorage.setItem(recordNameInDb, recordObjInDb);
};

LocalDb.prototype.get = function(recordName){
	var recordNameInDb = this.getDbName() + "-" + recordName;
	
	if(window.localStorage.getItem(recordNameInDb) === null){
			throw new Error("Brak wpisu w bazie danych");
		};
	
	try{
		var recordObjInDb = window.localStorage.getItem(recordNameInDb);
		return JSON.parse(recordObjInDb);
	}catch(e){
	}
};

var DB1 = new LocalDb("DB1xx");

DB1.getDbName();

var janek = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 32
};

DB1.save("janek", janek);

var janekRecovery = DB1.get("janek");

console.dir(janekRecovery);
