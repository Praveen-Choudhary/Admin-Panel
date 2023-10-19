import Home from './pages/Home';
import { BrowserRouter as BR, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import LogIn from './pages/LogIn';
import List from './pages/List';
import Single from './pages/Single';
import New from './pages/New';
import { productInputs, userInputs } from './formSource';
import UserTable from './components/UserTable';


const Contanier = styled.div`

`

function App() {


  return (
    
      <Contanier>
        <BR>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='login' element={<LogIn />} />
              <Route path='users'>
                <Route index element={<List />} />
                <Route path=':userId' element={<Single />} />
                <Route path='new' element={<New inputs={userInputs} title='Add new user' />} />
              </Route>
              <Route path='products'>
                <Route index element={<List />} />
                <Route path=':productId' element={<Single />} />
                <Route path='new' element={<New inputs={productInputs} title='Add new product' />} />
              </Route>


              
            </Route>
          </Routes>
        </BR>
      </Contanier>
    
  );
}

export default App;
