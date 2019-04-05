var db=require('../dbconnection');

var Student={

getAllStudents:function(callback){
    return db.query("Select * from student_details",callback);
},
getStudentById:function(id,callback){
    return db.query("Select * from student_details where Id=?",[id],callback);
},
addStudent:function(Student,callback){
   console.log("inside service");
   console.log(Student.Id);
    return db.query("insert into student_details values(?,?,?,?,?,?,?,?,?,?)",[Student.Id,Student.Name,Student.Fathername,Student.Email,Student.Address,Student.Pincode,Student.Course,Student.Dob,Student.Gender,Student.Contact],callback);
},
deleteStudent:function(id,callback){
    return db.query("delete from student_details where Id=?",[id],callback);
},
updateStudent:function(id,Student,callback){
    return db.query("update student_details set Name=?,Fathername=?,Email=?,Address=?,Pincode=?,Course=?,Dob=?,Gender=?,Contact=? where Id=?",[Student.Name,Student.Fathername,Student.Email,Student.Address,Student.Pincode,Student.Course,Student.Dob,Student.Gender,Student.Contact,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from student_details where Id in (?)",[delarr],callback);
}
};
module.exports=Student;