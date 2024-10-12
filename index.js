import express from "express"
import userRouter from "./routers/user.router"
import mongoose from "mongoose"
import cors from 'cors';
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/sikshaNest")
.then(()=>console.log("DB Connected!"))
.catch((err)=>console.log(err))
app.listen(8000,()=>{
    console.log("server is running on port 8000")
})

app.use("/users",userRouter)