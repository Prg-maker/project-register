import express from "express";
import { routes } from "./routes";
import cors from 'cors'


const server = express()

server.use(cors())


server.use(express.json())
server.use(routes)

server.listen(3001 , ()=> {
  console.log('server us running')
})