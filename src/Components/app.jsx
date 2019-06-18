import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./home";
import About from "./about";
import Resume from "./resume";
import Error from "./error";
import Projects from "./project";
import Contact from "./contact";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <br />
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
