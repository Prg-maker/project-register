import {prisma} from '../../prisma'


class CreateUserServices{
  async execute(name , email , password){
    
    const userVerifyExist = await prisma.user.findFirst({
      where:{
        email
      }
    }) 
    try{
      if(!userVerifyExist){
        const User = await prisma.user.create({
          data:{
            name,
            email,
            password
          }
        })
        return User
      }
  
    }catch(err){
      return 'user exist'
    }
   
   
  }
}

export {CreateUserServices}