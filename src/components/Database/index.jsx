import React from 'react';

import icon from '../../assets/Vector.png'
 import { Container,Title ,Table,Local,Icon,TR,TH,Button,Button2,LI} from './styles';
 import {FiTrash,FiEdit2} from 'react-icons/fi'
 


export const Database = (props) => {
  // const handleDelete=()=>{
		
	// }
	console.log(props)
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
		 {props.listUser?.map((item)=>(
			 <>
			<tr>
		<td>{item.nome}</td>
		<td>{item.idade}</td>
		<td>{item.genero}</td>
		<td>{item.perfil}</td>
		</tr>
			
			
			 </>
	))} 

	
	
	</tbody>
</Table>
    
    </Container>
  );
}

