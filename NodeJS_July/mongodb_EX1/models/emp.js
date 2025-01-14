import mongoose from "mongoose";

let emp_schema=mongoose.Schema({

    eid:Number,
    ename:String,
    esal:Number
})

let Employee=mongoose.model('employee_data',emp_schema)

export default Employee