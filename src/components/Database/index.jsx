import React from 'react';

import icon from '../../assets/Vector.png'
 import { Container,Title ,Table,Local,Icon,TR,TH,Button,Button2,LI} from './styles';
 import {FiTrash,FiEdit2} from 'react-icons/fi'
 


export const Database = (props) => {
  const handleDelete=()=>{
		
	}
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
	{props.itemList?.map((item,index)=>(
	<tr key={index}>
		
	
<td >{item.nome}</td>
	<td>{item.idade}</td>
	<td>{item.genero}</td>
	<td>{item.perfil}</td>
		<td><Button><FiTrash/></Button> <Button2><FiEdit2/></Button2> </td>
	</tr>
	))}

	
	
	</tbody>
</Table>
    
    </Container>
  );
}

