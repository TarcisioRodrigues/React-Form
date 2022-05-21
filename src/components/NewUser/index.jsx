



import { Container,Tittle ,FORM, Text,INPUT,INPUT2, Local,Desk,Button, Local2,Button2,SELECT,SELECT2} from './styles';
import{useForm} from 'react-hook-form'
import { useState } from 'react';

 export const NewUser = () => {
   const[nome,setNome]=useState('')
   const[idade,setIdade]=useState('')
   const[genero,setGenero]=useState('')
   const[perfil,setPerfil]=useState('')
 const {reset,register,handleSubmit} =useForm()
 

 const onSubmit = (data)=> {
    console.log(data)
 }
  return (
    <Container>
      <Tittle>Novo usuario</Tittle>
         <FORM onSubmit={handleSubmit(onSubmit)}>
         <Text>Perfil</Text>
         <SELECT2 {...register("category")} onChange={(perfil)=>setPerfil('lastChange',perfil)} >
         <option value=""></option>
        <option value="Administrador">Administrador</option>
        <option value="Usuario">Usuario</option>
        </SELECT2>
           <Text>Nome</Text>
         <INPUT {...register("name")} onChange={(nome)=>setNome('lastChange',nome)} />
         
          <Local>
          <Desk>
          <Text>Idade</Text>
         <INPUT2  type="number"{...register("number", { required: true, maxLength: 20 })}  onChange={(idade)=>setIdade('lastChange',idade)}  />
          </Desk>
         <Desk>
         <Text>Genero</Text>
         <SELECT {...register("gender")}  onChange={(genero)=>setGenero('lastChange',genero)}>
         <option value=""></option>
        <option value="Feminino">Feminino</option>
        <option value="Masculino">Masculino</option>
      </SELECT>
         </Desk>
          </Local>
         <Local2>
         <Button2 onClick={()=>{reset()}}>Limpar dados</Button2>
          <Button type='submit'>Salvar</Button>
         </Local2>
         </FORM>
        
    </Container>
  );
}

