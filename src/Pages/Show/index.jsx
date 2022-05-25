

import { TopBar } from '../../components/TopBar';
import { Database } from '../../components/Database';

import { Container,Tittle ,FORM, Text,INPUT,INPUT2, Local,Desk,Button, Local2,Button2,SELECT,SELECT2,Container2} from './styles';
import { useState } from 'react';


   export const Show= () => {

   const [user,setUser]=useState([])
   const [nome,setNome]=useState('')
   const [idade,setIdade]=useState('')
   const [genero,setGenero]=useState('')
   const [perfil,setPerfil]=useState('')

   const handleAdd=(event)=>{
      event.preventDefault();
      const arrayUser=[...user]
      const userData={
         nome,
         idade,
         genero,
         perfil
      }
      arrayUser.push(userData)
      
      // setUser(oldState=>{})
    
      console.log(arrayUser)
      setUser(arrayUser)
   
      Limpar()
      
   }
   const Limpar=()=>{
      setNome('')
      setIdade('')
      setGenero('')
      setPerfil('')
   }
   
return(
  <Container>
     <TopBar/>
      <Database listUser={user}  />
    <Container2>
      
      <Tittle>Novo usuario</Tittle>
         <FORM onSubmit={handleAdd}>
         <Text>Perfil</Text>
         <SELECT2 value={perfil} onChange={e => setPerfil(e.target.value)}  >
         <option value=""></option>
        <option value="Administrador">Administrador</option>
        <option value="Usuario">Usuario</option>
        </SELECT2>
           <Text>Nome</Text>
         <INPUT   value={nome} onChange={e => setNome(e.target.value)} />
          <Local>
          <Desk>
          <Text>Idade</Text>
         <INPUT2 type="number"  value={idade} onChange={e => setIdade(e.target.value)} />
          </Desk>
         <Desk>
         <Text>Genero</Text>
         <SELECT value={genero} onChange={e => setGenero(e.target.value)}>
         <option value=""></option>
        <option value="Feminino">Feminino</option>
        <option value="Masculino">Masculino</option>
      </SELECT>
         </Desk>
          </Local>
         <Local2>
           
         <Button2  onClick={Limpar} >Limpar dados</Button2>
          <Button type='submit'  >Salvar</Button>
         </Local2>
         </FORM>
        
    </Container2>
    </Container>
  

)
 }

  


