import {Container,Wrapper,Logo,Title,Campus,WrapperBox,Button,A} from'./styles'
import {Link} from 'react-router-dom'
import image from '../../assets/usergroup.png'
export const Login = () => {
  return (
    <Container>
     
       <Wrapper>
       
         <WrapperBox>
         
         <Logo src={image} />
         <Title>Login</Title>
         <Campus placeholder='Digite seu email' />
         <Campus placeholder='Digite sua senha'/>
         <Button>Entrar</Button>
         </WrapperBox>
       </Wrapper>
       <A href=''>Não tem conta?Registre-se agora!</A>
    </Container>
  )
}

