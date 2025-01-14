import jwt from 'jsonwebtoken'
let user_payload =  {
    "uname":"Rahul",
    "password":"IamGoodBoy"
}
let Secret_key="xyz123"
let token = jwt.sign(user_payload,Secret_key)
console.log(token)

let user_data=jwt.verify(token,Secret_key)
console.log(user_data)
