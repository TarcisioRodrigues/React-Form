import { useState ,useCallback} from 'react';



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
       count
    }
    arrayUser.push(userData)
    if(!userData){
       console.log("Preencha o campos")
    }
    // setUser(oldState=>{})
  
    console.log(arrayUser)
    setUser(arrayUser)
   
    Limpar()
    Contar()
    
    
 }
  const Contar=()=>{
    setCount(()=>count+1)
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
 return { idade,nome,perfil,genero,user,setGenero,setIdade,setPerfil,setNome ,Limpar,handleAdd,handleRemoveItem,handleUpdate,Contar,setUser}
}