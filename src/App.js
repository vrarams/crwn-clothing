import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

const HatsPage=()=>(
  <div>
    <h1>Hates Page</h1>
  </div>
)


function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop/hats" component={HatsPage}></Route> 
      </Switch>   
    </div>
  );
}

export default App;
