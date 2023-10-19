import {Routes, Route} from 'react-router-dom'
import './App.css';
import AppLayout from './layout/AppLayout';
import Products from './page/Products';
import Orders from './page/Orders';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route path='/' element={<Products/>} />
        <Route path='/orders' element={<Orders/>} />
      </Route>
    </Routes>
  );
}

export default App;
