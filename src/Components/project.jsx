import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const Projects = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/react"}>React JS</Link>
        </li>
        <li>
          <Link to={match.url + "/php"}>PHP</Link>
        </li>
        <li>
          <Link to={match.url + "/vue"}>Vue JS</Link>
        </li>
      </ul>
      <Switch>
        <Route
          exact
          path={match.url + "/:project_name"}
          render={({ match }) => <div>This is {match.params.project_name}</div>}
        />
        <Route
          exact
          path={match.url}
          render={() => <div>Pick a project to view!</div>}
        />
      </Switch>
    </div>
  );
};

export default Projects;
