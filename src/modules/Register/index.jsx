import {  useState } from 'react'
import {
  Wrapper,
  Content,
  FormAction,
  Input,
  Label,
  Button
} from './styles'

import swal from 'sweetalert'
import { api } from '../../services/api'
import { useNavigate  } from 'react-router-dom'

export function Register(){

  const [name , setName] = useState('')
  const [password , setPassword] = useState('')
  const [email , setEmail] = useState('')
  const navigation = useNavigate()

  

  async function handleClickRegister(event){
    event.preventDefault()
    
    if(name == '' || password == '' || email == ''  ){
      return swal('erro, name, password or email is not value null')
    }

      let validate = /\S+@\S+\.\S+/;
  
      if(validate.test(email) == false){
        return swal('erro, email inválido')
      }
   
      



    if(password.length <= 8){
      return swal('Erro, a senhatem menos de 8 caracteries')
    }

    if(password.indexOf(' ') >= 0 ){
      return swal('Erro, senha contém espaço')
    }

    try{
      const response = await api.post('/register' , {
      name,
      email,
      password
      })

      if(!response.data){
        return swal('Esse usuário já existe')
      }

      setTimeout(()=> {
        swal('usuário criado com sucesso')
        navigation('/')
      } , 500)


    }catch(err){
      return swal('erro ao criar o usuario ou usuario existe')
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
        >Sing up</h2>

        <FormAction >
          <Label>Name</Label>
          <Input
            onChange={event => setName(event.target.value)}
            value={name}
            placeholder='Leslie Alexander'
          />
          <Label>Email</Label>
          <Input
            onChange={event => setEmail(event.target.value)}
            value={email}
            type='email'
            placeholder='example@gmail.com'
          />
          <Label>Password</Label>
          <Input
            onChange={event => setPassword(event.target.value)}
            value={password}
            type='password'
            placeholder='at least 8 characteres'
          />

          <Button
            onClick={handleClickRegister}
          >Create account</Button>
          </FormAction>

        <p
          style={{
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.4)',
            fontWeight: 600,
            fontSize: 16,

          }}        
        >Already have an Account</p>

        <a 
          href="/"
          style={{
           display: 'flex',
           justifyContent: 'center',
           fontSize: 16,
           fontWeight: 600,
           textDecoration: 'none',
           color: 'rgba(0, 133, 255, 0.8)',
           paddingTop: 5,
           

          }}
        >Log in</a>
      
      </Content>
    </Wrapper>
  )
}