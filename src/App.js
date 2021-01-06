import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shoppage.component'


function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route> 
      </Switch>   
    </div>
  );
}

export default App;
