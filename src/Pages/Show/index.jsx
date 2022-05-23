

import { TopBar } from '../../components/TopBar';
import { Database } from '../../components/Database';

import { Container,Tittle ,FORM, Text,INPUT,INPUT2, Local,Desk,Button, Local2,Button2,SELECT,SELECT2,Container2} from './styles';
import { useState } from 'react';
import { useEffect } from 'react';
   export const Show= (props) => {
   const[user,setUser]=useState({
      id:1,
      nome:"",
      idade:"",
      genero:"",
      perfil:""
   })
   const [itemsList, setItemsList] = useState([])
 
 
   
   const handleAdd=(event)=>{
      event.preventDefault()
      if(user) {
      setItemsList([...itemsList,user])
      setUser('')
      console.log(itemsList)
      // }
      // if(user.idade) {
      //    setItemsList([...itemsList,user.idade])
      //    setUser('')
      //    console.log(itemsList)
      //    }
      //    if(user.perfil) {
      //       setItemsList([...itemsList,user.perfil])
      //       setUser('')
      //       console.log(itemsList)
      //       }
      //       if(user.genero) {
      //          setItemsList([...itemsList,user.genero])
      //          setUser('')
      //          console.log(itemsList)
              }
     
     setUser('')
   }
   
   
return(
  <Container>
     <TopBar/>
      <Database itemList={itemsList}  />
    <Container2>
      
      <Tittle>Novo usuario</Tittle>
         <FORM onSubmit={handleAdd}>
         <Text>Perfil</Text>
         <SELECT2   required value={user.perfil }
            onChange={(event)=>setUser(event.target.value)}>
         <option value=""></option>
        <option value="Administrador">Administrador</option>
        <option value="Usuario">Usuario</option>
        </SELECT2>
           <Text>Nome</Text>
         <INPUT required value={user.nome }
            onChange={(event)=>setUser(event.target.value)} />
          <Local>
          <Desk>
          <Text>Idade</Text>
         <INPUT2 required  type="number" value={user.idade }
            onChange={(event)=>setUser(event.target.value)} />
          </Desk>
         <Desk>
         <Text>Genero</Text>
         <SELECT required value={user.genero}
            onChange={(event)=>setUser(event.target.value)}>
         <option value=""></option>
        <option value="Feminino">Feminino</option>
        <option value="Masculino">Masculino</option>
      </SELECT>
         </Desk>
          </Local>
         <Local2>
           
         <Button2  >Limpar dados</Button2>
          <Button type='submit'  >Salvar</Button>
         </Local2>
         </FORM>
        
    </Container2>
    </Container>
  

)
 }

  


