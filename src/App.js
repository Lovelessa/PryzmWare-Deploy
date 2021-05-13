import './App.css';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import BrowserRouter from 'react-router-dom/BrowserRouter';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Router>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/signin" component={SigninPage} exact/>
      </Switch>
    </Router>
    </BrowserRouter>
  );
}

export default App;
