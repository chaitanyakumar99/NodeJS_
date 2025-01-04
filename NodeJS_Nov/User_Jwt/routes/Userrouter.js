import express, { json } from 'express'
import UserModel from '../model/User.js'
let router = express.Router();


/*
    Usage: user Router Root Req
    URL: http://127.0.0.1:8081/user/
    Method Type:GET
    Required Field: None
*/
router.get("/", (req, resp) => {
    return resp.json({ "msg": "User Router - Root Req" })
});

/*
    Usage: user Registration
    URL: http://127.0.0.1:8081/user/reg
    Method Type:POST
    Required Field: username,email,mobile,password
*/
router.post("/reg", async (req, resp) => {
    try {
        //read form data or post man body data
        let user = req.body;
        //check user is exits or not
        let user_obj = await UserModel.findOne({ 'email': user.email })

        if (user_obj) {
            return resp.json({ "message": "User Already exits" })
        }
        //user not exits
        user_obj = new UserModel(user);
        console.log(user_obj)
        //save user object into mongodb
        await user_obj.save();
        return resp.json({ "message": "New User Registered" })

    } catch (err) {
        return resp.json({ "Error Message": err.message })
    }

    /*
    Usage: user Registration
    URL: http://127.0.0.1:8081/user/reg
    Method Type:POST
    Required Field: username,email,mobile,password
*/

    router.post("/login", async, (req, resp) => {

         try{

            
         }
         catch(err){

         }
    })

});



export default router;