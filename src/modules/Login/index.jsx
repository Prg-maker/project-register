import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { api } from '../../services/api'

import {
  Wrapper,
  Content,
  FormAction,
  Input,
  Label,
  Button
} from './styles'


export function Login(){


  const [password , setPassword] = useState('')
  const [email , setEmail] = useState('')
  const navigation = useNavigate()

  async function handleClickLogin(event){
    event.preventDefault()

    if(password == '' || email == ''  ){
      return swal('erro, email ou password estão vazios')
    }


    let validate = /\S+@\S+\.\S+/;
  
    if(validate.test(email) == false){
      return swal('erro, email inválido')
    }

    if(password.length <= 8){
      return swal('senha inválido')
    }

    if(password.indexOf(' ') >= 0 ){
      return swal('Erro, senha contém espaço')
    }
   

    try{
      const response = await api.post('/login' , {
        email,
        password
      })

     
      if(response.data == 'user not exist'){
        return swal('email ou password incorretos')
      
      }
      navigation('/content')

      console.log(response.data)

    }catch(err){
      return "erro"
    }
 
  }

  return (
    <Wrapper>
      <Content>
        <h2 
          style={{
            paddingTop: 53,
            paddingLeft: 41
          }}
        >login in</h2>

        <FormAction >
        
          <Label>Email</Label>
          <Input
            onChange={event => setEmail(event.target.value)}
            value={email}
            type='email'
            placeholder='example@mail.com'
          />
          <Label>Password</Label>
          <Input
            onChange={event => setPassword(event.target.value)}
            value={password}
            type='password'
            placeholder='at least 8 characteres'
          />

          <Button 
            onClick={handleClickLogin}
          >Sing up</Button>
        </FormAction>

        <p
          style={{
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.4)',
            fontWeight: 600,
            fontSize: 16,

          }}        
        >Don't have an account?</p>

        <a 
          href="/register"
          style={{
           display: 'flex',
           justifyContent: 'center',
           fontSize: 16,
           fontWeight: 600,
           textDecoration: 'none',
           color: 'rgba(0, 133, 255, 0.8)',
           paddingTop: 5,
           

          }}
        >Sing up</a>
      
      </Content>
    </Wrapper>
  )
}