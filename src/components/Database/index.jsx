import React from 'react';

import icon from '../../assets/Vector.png'
 import { Container,Title ,Table,Local,Icon,TR,TH,Button,Button2,} from './styles';
 import {FiTrash,FiEdit2} from 'react-icons/fi';
 
 import {useUser} from '../../hooks/useUser'
export const Database = (props) => {
	const {user,handleAdd,handleRemoveItem,
		handleUpdate,Limpar,perfil,setPerfil,idade,setIdade,
		nome,setNome,genero,setGenero}=useUser()
	console.log(props.ItemList)
  
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
		 {user?.map((item,index)=>(
			 <>
			<tr key={index}>
		<td>{item.nome}</td>
		<td>{item.idade}</td>
		<td>{item.genero}</td>
		<td>{item.perfil}</td>
				{item.perfil==="Administrador"&&(
						<td><Button2 onClick={handleUpdate(index)}><FiEdit2/></Button2> </td>
				)}
				{item.perfil==="Usuario"&&(
					<td> 	<Button onClick={()=>{handleRemoveItem(index)}}><FiTrash/></Button><Button2 onClick={()=>{handleUpdate(index)}}><FiEdit2/></Button2> </td>
				)}
			 
				
		</tr>
			
			
			 </>
	))} 

	
	
	</tbody>
</Table>
    
    </Container>
  );
}

