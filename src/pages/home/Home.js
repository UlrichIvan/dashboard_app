import React from "react";
import "./home.css";
import First from "../../components/first/First";
import Second from "../../components/second/Second";
import { Switch as Routes, Route, useRouteMatch } from "react-router-dom";
import { routesTarget } from "../../constants";
import { v4 } from "uuid"
function Home() {
  const { path } = useRouteMatch()
  return (
    <div className="home">
      <div className="content h-100">
        <div className="container-fluid pt-2">
          {/* first part */}
          <First />
          {/* second part */}
          <Routes>
            <Route exact={false} path={`/`} component={Second} />
            {routesTarget.map(e => (<Route key={v4()} exact={true} path={`${path === "/" ? "" : path}/${e.route}`} component={Second} />))}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
