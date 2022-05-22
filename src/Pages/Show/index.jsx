

import { TopBar } from '../../components/TopBar';
import { Database } from '../../components/Database';

import { Container,Tittle ,FORM, Text,INPUT,INPUT2, Local,Desk,Button, Local2,Button2,SELECT,SELECT2,Container2} from './styles';
import { useState } from 'react';
import { useEffect } from 'react';
   export const Show= (props) => {
   const[nome,setNome]=useState('')
   const[idade,setIdade]=useState('')
   const[perfil,setPerfil]=useState('')
   const[genero,setGenero]=useState('')
   const [itemsList, setItemsList] = useState([])
   const [itemsList2, setItemsList2] = useState([])
   const [itemsList3, setItemsList3] = useState([])
   const [itemsList4, setItemsList4] = useState([])
 
   
   const handleAdd=(event)=>{
      event.preventDefault()
      if(nome) {
      setItemsList([...itemsList,nome])
      setNome('')
      console.log(itemsList)
      }
      if(idade) {
      setItemsList2([...itemsList2,idade])
      setIdade('')
      console.log(itemsList2)
      }
      if(perfil) {
      setItemsList3([...itemsList3,perfil])
      setPerfil('')
      console.log(itemsList3)
      }
      if(genero) {
      setItemsList4([...itemsList4,genero])
      setGenero('')
      console.log(setItemsList4)
      }
     
      setIdade('')
      setNome('')
      setPerfil('')
   }
   
   
return(
  <Container>
     <TopBar/>
      <Database itemList={itemsList} itemsList2={itemsList2} itemsList3={itemsList3} itemsList4={itemsList4} />
    <Container2>
      
      <Tittle>Novo usuario</Tittle>
         <FORM onSubmit={handleAdd}>
         <Text>Perfil</Text>
         <SELECT2   required value={perfil }
            onChange={(event)=>setPerfil(event.target.value)}>
         <option value=""></option>
        <option value="Administrador">Administrador</option>
        <option value="Usuario">Usuario</option>
        </SELECT2>
           <Text>Nome</Text>
         <INPUT required value={nome }
            onChange={(event)=>setNome(event.target.value)} />
          <Local>
          <Desk>
          <Text>Idade</Text>
         <INPUT2 required  type="number" value={idade }
            onChange={(event)=>setIdade(event.target.value)} />
          </Desk>
         <Desk>
         <Text>Genero</Text>
         <SELECT required value={genero}
            onChange={(event)=>setGenero(event.target.value)}>
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

  


