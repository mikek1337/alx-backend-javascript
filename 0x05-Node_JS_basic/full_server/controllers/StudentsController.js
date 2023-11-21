import readDatabase from "../utils";

class StudentsController{
    static getAllStudent(req, res)
    {
        readDatabase('database.csv').then((data)=>{
            
        })
    }
}