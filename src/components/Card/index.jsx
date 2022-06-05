import React from 'react';
import icon from '../../assets/iconre.png'
import group from '../../assets/usergroup.png'
import { Container ,Wrapper,Group,Title,USER,Title2,Button,Subtitle,Local,Title3,Total,Group2,Title4} from './styles';
import { Link } from 'react-router-dom';

import {useUser} from '../../hooks/useUser'
export const Card = (props) => {
 const{count}=useUser()
console.log("Contador",count)

  return (
    
    <Container>
      <Title4>
      <Group2 src={icon}/>
      <Subtitle>Contador usuarios</Subtitle>
      </Title4>
      <Wrapper>
        <USER>
        <Group src={group} />
        <Title>USUARIOS</Title>
        </USER>
        <Total>
        <Title2>Total</Title2>
          <Title3>{count}</Title3>
        </Total>
        
      </Wrapper>
      
      <Local>
      <Link to='/show'><Button >Lista de usuarios </Button></Link>
      </Local>
      
    </Container>
  )
}

