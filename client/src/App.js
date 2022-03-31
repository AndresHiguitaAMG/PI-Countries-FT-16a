import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <Router>
      <Route exact path={"/"} component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route path={"detail/:id"} component={Detail} />
    </Router>
  );
}

export default App;
