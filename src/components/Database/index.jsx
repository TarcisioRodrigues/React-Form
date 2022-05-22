import React from 'react';

import icon from '../../assets/Vector.png'
 import { Container,Title ,Table,Local,Icon,TR,TH,Button,Button2,LI} from './styles';
 import {FiTrash,FiEdit2} from 'react-icons/fi'
 


export const Database = (props) => {
  
  return(
    
    <Container>
      <Local><Icon src={icon} alt="" width={20} height={20} />
     <Title>Banco de dados</Title></Local>
     <Table>
	
	<thead>
	<TR>
		<TH>Nome</TH>
		<TH>Idade</TH>
		<TH>Genero </TH>
		<TH>Perfil</TH>
		<TH></TH>
	</TR>
	</thead>
	<tbody>
	<tr>
		
	{props.itemList?.map((item)=>(<TR><td>{item}</td></TR>))}
	{props.itemList2?.map((item2)=>( <TR><td>{item2}</td></TR>))}
	{props.itemList4?.map((item3)=>( <TR><td>{item3}</td></TR>))}
	{props.itemList3?.map((item4)=>( <TR><td>{item4}</td></TR>))} 

	</tr>
	
	
	</tbody>
</Table>
    
    </Container>
  );
}

