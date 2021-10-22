import './App.css';
import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Add from './component/Add';
import List from './component/List';
import Edit from './component/Edit';
import {
  BrowserRouter as Router,
  Route, Switch, Link
} from 'react-router-dom';
import Home from './Home';
import Ventas from './component/Ventas';

function App() {
  return (
    <Router>
      <div>
        <header>
          Proyecto Telecom
        </header>
      </div>
      <nav className="navbar navbar-light justify-content-center  bg-dark text-center col-xs-12">
        <Link to="/" className="nav-item nav-link" >Venta</Link>
        <Link to="/list" className="nav-item nav-link" >Listado</Link>
        <Link to="/edit" className="nav-item nav-link" >Editar</Link>
        <Link to="/add" className="nav-item nav-link" >Agregar</Link>
        <Link to="/add" className="nav-item nav-link" >Ventas</Link>
      </nav>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/list"><List/></Route>
        <Route path="/edit"><Edit/></Route>
        <Route path="/add"><Add/></Route>
        <Route path="/venta"><Ventas/></Route>
      </Switch>
     
    </Router>
    
  );
}

export default App;
