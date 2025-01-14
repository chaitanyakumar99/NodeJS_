import bcrypt from 'bcrypt'

let user={
    name:"Rahul",
    email:"rahul123@gmail.com",
    cc:'1235456799121211',
    password:"ili"
}

console.log(user);

let salt=bcrypt.genSaltSync(10)
let new_cc=bcrypt.hashSync(user.cc,salt)
let new_password=bcrypt.hashSync(user.password,salt)

user={...user,cc:new_cc,password:new_password}
console.log(user);
console.log(user.password);


let flag=bcrypt.compareSync("ilv",user.password)
if(flag){
console.log("login success");
}
else{
    console.log("login failed");
}
