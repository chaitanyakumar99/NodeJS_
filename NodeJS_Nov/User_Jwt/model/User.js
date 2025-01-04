import mongoose from 'mongoose'


let userShema = mongoose.Schema({
    user_Name: { type: String, require: true },
    email: { type: String, require: true },
    mobile: { type: Number, require: true },
    password: { type: String, require: true }

})

export default userShema