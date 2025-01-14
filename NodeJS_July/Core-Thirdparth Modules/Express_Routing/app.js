import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import user from './routing/userRouter.js'
import product from './routing/productRouter.js'

//create express app

let app=express()
app.use(morgan('tiny'))

app.use('/user',user)
app.use('/product',product)

app.listen(8087,'127.0.0.1',(err)=>{
    console.log(chalk.bgBlue("server is running"));
})


