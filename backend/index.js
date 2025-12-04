const express=require("express")
const app=express()
const cors=require("cors")
const dotenv=require("dotenv")
const cookieParser = require("cookie-parser")
const connectdb = require("./src/Db")
const userrouter=require("./src/route/AuthRoute.js")
const shoprouter=require("./src/route/ShopRoute.js")
const itemrouter=require("./src/route/ItemRoute.js")
const orderouter=require("./src/route/OrderRoute.js")
const http =require("http")
const {Server}=require("socket.io")
const { sockethandler } = require("./socket.js")
dotenv.config()

app.get("/",async()=>{
    console.log("Welcomes to vingo backend system")






})
app.use(express.json())
const server=http.createServer(app)
const io=new Server(server,{
  cors:({
    origin:['http://localhost:5173','http://localhost:5174',"http://localhost:5175"],
    methods:['POST','GET',
        'PUT','PATCH'
    ],
    credentials:true






})


})

app.use(cookieParser())
app.use(cors({
    origin:['http://localhost:5173','http://localhost:5174',"http://localhost:5175"],
    methods:['POST','GET',
        'PUT','PATCH'
    ],
    credentials:true






}))
app.use("/user",userrouter)
app.use("/shop",shoprouter)
app.use("/item",itemrouter)
app.use("/order",orderouter)
const port=process.env.port

server.listen(port,async()=>{

  try {
    console.log(   `server is running on ${port}`)
    connectdb()
    
  } catch (error) {
    console.log(`server error ${error}`)
    
  }
})