import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './Containers/Homepage/Homepage';
import MenuHeader from './Components/menuHeader/menuHeader'
import CategoryPages from './Containers/CategoryPages/CategoryPages'
import Footer from './Components/Footer/Footer'
import { Container } from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      <Router>
        <Container fluid style={{margin: 0, padding: 0}}>
          <Header />
          <MenuHeader />
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/:slug' component={CategoryPages} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
