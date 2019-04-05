var db=require('../dbconnection');

var Faculty={

getAllFaculties:function(callback){

return db.query("Select * from faculty",callback);

},
getFacultyById:function(id,callback){

    return db.query("select * from faculty where Id=?",[id],callback);
},
addFaculty:function(Faculty,callback){
   console.log("inside service");
   console.log(Faculty.Id);
return db.query("Insert into faculty values(?,?,?,?,?,?,?,?,?,?)",[Faculty.Id,Faculty.Name,Faculty.Fathername,Faculty.Email,Faculty.Address,Faculty.Pincode,Faculty.Department,Faculty.Dob,Faculty.Gender,Faculty.Contact],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteFaculty:function(id,callback){
    return db.query("delete from faculty where Id=?",[id],callback);
},
updateFaculty:function(id,Faculty,callback){
    return db.query("update faculty set Name=?,Fathername=?,Email=?,Address=?,Pincode=?,Department=?,Dob=?,Gender=?,Contact=? where Id=?",[Faculty.Name,Faculty.Fathername,Faculty.Email,Faculty.Address,Faculty.Pincode,Faculty.Department,Faculty.Dob,Faculty.Gender,Faculty.Contact,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from faculty where Id in (?)",[delarr],callback);
}
};
module.exports=Faculty;