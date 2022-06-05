import React, { createContext} from 'react';
import { useState ,useCallback,useEffect} from 'react';

const UserContext=createContext({})


const UserProvider=({ children })=> {
  const [user,setUser]=useState([])
const [nome,setNome]=useState('')
const [idade,setIdade]=useState('')
const [genero,setGenero]=useState('')
const [perfil,setPerfil]=useState('')
const [count,setCount]=useState(0)

const handleAdd=(event)=>{
  event.preventDefault();
  const arrayUser=[...user]
  const userData={
     nome,
     idade,
     genero,
     perfil,
   
  }
  arrayUser.push(userData)
  if(!userData){
     console.log("Preencha o campos")
  }
  console.log(arrayUser)
  setUser(arrayUser)
 
  Limpar()
 
  handleCount()
  
}

 const handleCount=()=>{
  setCount((anterior)=>anterior+1)
 }
 const handleCountN=()=>{
  setCount((anterior)=>anterior-1)
 }


  const Limpar=()=>{
    setNome('')
    setIdade('')
    setGenero('')
    setPerfil('')
 }
  const handleRemoveItem = (index)=>{
      const listUser=user.slice(1)
    setUser(listUser)
    handleCountN()
  };
 
const handleUpdate=(index)=>{
 
  const findUser=user.find((u,indexUser)=>indexUser===index)
  console.log('usuario na posição',findUser)
 
  setNome(findUser.nome)
  setGenero(findUser.genero)
  setPerfil(findUser.perfil)
  setIdade(findUser.idade)
 }
console.log("Dentro do contexto",count)
  return (
    
    <UserContext.Provider value={{handleAdd,handleRemoveItem,
    handleUpdate,handleCount,setGenero,setIdade,setPerfil,setNome,
    nome,idade,perfil,genero,user,count}}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider};
