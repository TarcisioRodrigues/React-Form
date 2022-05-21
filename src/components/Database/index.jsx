import React from 'react';

import icon from '../../assets/Vector.png'
 import { Container,Title ,Table,Local,Icon,TR,TH,Button,Button2} from './styles';
 import {FiTrash,FiEdit2} from 'react-icons/fi'
 


export const Database = () => {
  
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
		<td>Nome</td>
		<td>20</td>
		<td>Masculino</td>
		<td>Usuario</td>
		<td><Button><FiTrash/></Button> <Button2><FiEdit2/></Button2> </td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	</tbody>
</Table>
    
    </Container>
  );
}

