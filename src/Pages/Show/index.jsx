

import { TopBar } from '../../components/TopBar';
import { Database } from '../../components/Database';

import { Container,Tittle ,FORM, Text,INPUT,INPUT2, Local,Desk,Button, Local2,Button2,SELECT,SELECT2,Container2} from './styles';
import { useState ,useCallback} from 'react';


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
      if(!userData){
         console.log("Preencha o campos")
      }
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
   const handleRemoveItem = useCallback((users) => {
      let newTodos = [...user];
      newTodos.splice(user.indexOf(users), 1)
      setUser(newTodos);
    }, [user]);
    const handleUpdate=()=>{
   setUser(array=>[...array,`${array.length}`])
   }
   
return(
  <Container>
     <TopBar/>
      <Database listUser={user} Deletar={handleRemoveItem} Update={handleUpdate} />
    <Container2>
      
      <Tittle>Novo usuario</Tittle>
         <FORM onSubmit={handleAdd}>
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
          <Button type='submit'  >Salvar</Button>
         </Local2>
         </FORM>
        
    </Container2>
    </Container>
  

)
 }

  


