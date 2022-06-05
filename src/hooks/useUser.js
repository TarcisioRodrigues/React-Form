import {useContext} from 'react'
import{UserContext} from '../Context/UserContext'
export const useUser=()=>{
  const value = useContext(UserContext);
  return value;
}



