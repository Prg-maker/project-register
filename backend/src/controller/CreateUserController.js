import { CreateUserServices } from "../services/CreateUserServices"



class CreateUserController{
  async handle(req , res){
    const {name , email , password} = req.body

    try{
      const services = new CreateUserServices()
      const result = await services.execute(name , email , password)
  
      return res.json(result)
    }catch(err){
      return res.json('err')
    } 

  }
}

export {CreateUserController}