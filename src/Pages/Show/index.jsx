

import { TopBar } from '../../components/TopBar';
import { Database } from '../../components/Database';
import {useUser} from '../../hooks/useUser'
import { Container,Tittle ,FORM, Text,INPUT,INPUT2, Local,Desk,Button, Local2,Button2,SELECT,SELECT2,Container2} from './styles';



export const Show= (props) => {
   const {user,handleAdd,handleRemoveItem,
      handleUpdate,Limpar,perfil,setPerfil,idade,setIdade,
      nome,setNome,genero,setGenero}=useUser()
  
   
return(
  <Container>
     <TopBar/>
      <Database />
    <Container2>
      
      <Tittle>Novo usuario</Tittle>
         <FORM onSubmit={handleAdd} >
         <Text>Perfil</Text>
         <SELECT2 value={perfil} onChange={e => setPerfil(e.target.value)}  required >
         <option value=""></option>
        <option value="Administrador">Administrador</option>
        <option value="Usuario">Usuario</option>
        </SELECT2>
           <Text>Nome</Text>
         <INPUT   required value={nome} onChange={e => setNome(e.target.value)} />
          <Local>
          <Desk>
          <Text>Idade</Text>
         <INPUT2 required type="number"  value={idade} onChange={e => setIdade(e.target.value)} />
          </Desk>
         <Desk>
         <Text>Genero</Text>
         <SELECT value={genero} onChange={e => setGenero(e.target.value)} required >
         <option value=""></option>
        <option value="Feminino">Feminino</option>
        <option value="Masculino">Masculino</option>
      </SELECT>
         </Desk>
          </Local>
         <Local2>
           
         <Button2  onClick={Limpar} >Limpar dados</Button2>
          <Button type='submit'   >Salvar</Button>
         </Local2>
         </FORM>
        
    </Container2>
    </Container>
  

)
 }

  


