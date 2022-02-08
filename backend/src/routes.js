import { Router } from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { LoginUserController } from "./controller/LoginUserController";

const routes = Router()

routes.post('/register' , new CreateUserController().handle)
routes.post('/login' , new LoginUserController().handle)

export {routes}