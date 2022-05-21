
import {Container} from './styles'
import { TopBar } from '../../components/TopBar';
import { Database } from '../../components/Database';
import { NewUser } from '../../components/NewUser';
export const Show = () => {
 
  return (
 <Container>
   <TopBar/>
   <Database/>
   <NewUser/>
 </Container>
  );
}

