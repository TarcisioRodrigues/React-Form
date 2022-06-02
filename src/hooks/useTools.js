import { useState ,useCallback,useEffect} from 'react';



export const useTools=()=>{
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
 useEffect(()=>{
    console.log(count)
    
},[count])

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
    handleCountN()
  }, [user]);
   const handleUpdate=()=>{
 setUser(array=>[...array,`${array.length}`])
 
 handleRemoveItem()
 alert('Edite agora!!')
 }

 return { idade,nome,perfil,genero,user,count,setGenero,setIdade,setPerfil,setNome ,Limpar,handleAdd,handleRemoveItem,handleUpdate,setUser,setCount,handleCount,useTools}
}