import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import './Normalize.css'

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"


import HomePage from "./pages/HomePage";
import CursosPage from "./pages/CursosPage";
import NovedadesPage from "./pages/NovedadesPage";
import ContactoPage from "./pages/ContactoPage";




function App() {


  return (
    <div className="App">
      <Router>

        <Header />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cursos" exact component={CursosPage} />
          <Route path="/novedades" exact component={NovedadesPage} />
          <Route path="/contacto" exact component={ContactoPage} />

        </Switch>


        <Footer />

      </Router>
    </div>
  );
}

export default App;
