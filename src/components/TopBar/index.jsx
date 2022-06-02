import avatar from '../../assets/jb.png'
import {Container,Perfil,Logo,Photo,User,Title2} from './styles'
import {Link} from 'react-router-dom'
export const TopBar = () => {
  return (
    <Container>
    
    <Link to="/"  style={{textDecorationLine:'none',color:'black',cursor:'pointer'}}>
    <Logo>
      <h1>Novel consultoria</h1>
      <Title2>Teste React</Title2>
      </Logo>
    </Link>
      <Perfil>
        <User>
        <p>João da Silva</p>
        <p>Administrador</p>
        </User>
        <Photo src={avatar} alt="Avatar" />

      </Perfil>
    </Container>
  );
}

