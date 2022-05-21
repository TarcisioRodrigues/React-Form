import avatar from '../../assets/jb.png'
import {Container,Perfil,Logo,Photo,User,Title2} from './styles'
export const TopBar = () => {
  return (
    <Container>
      <Logo>
      <h1>Novel consultoria</h1>
      <Title2>Teste React</Title2>
      </Logo>
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

