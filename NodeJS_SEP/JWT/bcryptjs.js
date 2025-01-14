import bcrypt from 'bcrypt'
 
let users={
    email:"rahul123@gmail.com",
    cc:123456789,
    pw:"abc"
}

let salt=bcrypt.genSalt(10)
let new_cc=bcrypt.hashSync(users.cc,salt)
let new_pw=bcrypt.hashSync(users.pw,salt)

console.log(new_cc)
console.log(new_pw)