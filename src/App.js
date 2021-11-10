import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Header/Header';
import AuthProvider from './components/Context/AuthProvider';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import ExploreCars from './components/ExploreCars/ExploreCars';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header />
              <Home></Home>
              <Footer/>
            </Route>
            <Route exact path='/home'>
              <Header />
              <Home></Home>
              <Footer/>
            </Route>
            <Route exact path='/login'>
              <Header />
              <Login></Login>
              <Footer/>
            </Route>
            <Route exact path='/explorecars'>
              <Header />
              <ExploreCars/>
              <Footer/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;