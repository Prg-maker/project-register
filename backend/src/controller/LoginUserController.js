import { LoginUserServices } from "../services/LoginUserServices"



class LoginUserController{
  async handle(req , res){
    const {email , password} = req.body

    const services = new LoginUserServices()

    const result = await services.execute(email , password)

    return res.json(result)
  }
}

export {LoginUserController}