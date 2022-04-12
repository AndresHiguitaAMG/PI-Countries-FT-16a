import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail.jsx';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route path="/home/create" component={Form} />
    </Router>
  );
}

export default App;
