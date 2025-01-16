import mongoose from "mongoose";

let empSchema = mongoose.Schema({
    
    eid: { type: Number, require: true },
    ename: { type: String, require: true },
    esal: { type: Number, require: true },
    eloc: { type: String, require: true, default: "Bangalore" }

})

let EmpModel = mongoose.model("empCrud", empSchema);

export default EmpModel;