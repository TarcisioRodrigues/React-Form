

import { TopBar } from '../../components/TopBar';
import { Database } from '../../components/Database';

import { Container,Tittle ,FORM, Text,INPUT,INPUT2, Local,Desk,Button, Local2,Button2,SELECT,SELECT2,Container2} from './styles';
import { useState } from 'react';
import {useForm} from 'react-hook-form'
// import { useEffect } from 'react';
   export const Show= (props) => {
   const {register,handleSubmit,reset}=useForm()
 
const{itemList,setItemList}=useState([])
   const handleAdd=(data)=>{
      console.log(data)
      
   }
   
   
return(
  <Container>
     <TopBar/>
      <Database ItemList={itemList}  />
    <Container2>
      
      <Tittle>Novo usuario</Tittle>
         <FORM onSubmit={handleSubmit(handleAdd)}>
         <Text>Perfil</Text>
         <SELECT2   {...register("test")}>
         <option value=""></option>
        <option value="Administrador">Administrador</option>
        <option value="Usuario">Usuario</option>
        </SELECT2>
           <Text>Nome</Text>
         <INPUT {...register("test1")} />
          <Local>
          <Desk>
          <Text>Idade</Text>
         <INPUT2 {...register("test2")} />
          </Desk>
         <Desk>
         <Text>Genero</Text>
         <SELECT {...register("test3")}>
         <option value=""></option>
        <option value="Feminino">Feminino</option>
        <option value="Masculino">Masculino</option>
      </SELECT>
         </Desk>
          </Local>
         <Local2>
           
         <Button2 onClick={()=>reset()}  >Limpar dados</Button2>
          <Button type='submit'  >Salvar</Button>
         </Local2>
         </FORM>
        
    </Container2>
    </Container>
  

)
 }

  


