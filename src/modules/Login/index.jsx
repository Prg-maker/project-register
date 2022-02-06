import {
  Wrapper,
  Content,
  FormAction,
  Input,
  Label,
  Button
} from './styles'


export function Login(){
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
            type='email'
            placeholder='example@mail.com'
          />
          <Label>Password</Label>
          <Input
            type='password'
            placeholder='at least 8 characteres'
          />

          <Button>Sing up</Button>
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