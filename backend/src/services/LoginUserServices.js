import {prisma} from '../../prisma'
import  {sign} from 'jsonwebtoken'


class LoginUserServices{
  async execute(email , password){


    const user = await prisma.user.findFirst({
      where:{
        email,
        password
      }
    })

    if(!user){
      return 'user not exist'
    }
    

    const token = sign({
      user:{
        name: user.name,
        email: user.email,
        password: user.password
      },
    },'Euamobasquete',
      {
        subject: user.id,
        expiresIn: '1d'
      }

    )


    return {token , user}
    
  }
}

export {LoginUserServices}