import "./home.css";
import First from "../../components/first/First";
import Second from "../../components/second/Second";
import { Switch as Routes, Route, useRouteMatch } from "react-router-dom";
import { routesTarget } from "../../constants";
import { v4 } from "uuid"
import { useDispatch } from "react-redux";
import { useEffect } from "react"
import Overlay from "../../components/overlay/Overlay";
import { setUrl } from "../../actions/paginationActions";

function Home() {
  const { url } = useRouteMatch()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUrl(url === "/" ? "/all-charnel-interaction-summary-report" : url))
  }, [url, dispatch]);

  return (
    <>
      {/* overlay */}
      < Overlay />
      <div className="home">
        <div className="content h-100">
          <div className="container-fluid pt-2">
            {/* first part */}
            <First />
            {/* second part */}
            <Routes>
              <Route exact={false} path={`/`} component={Second} />
              {routesTarget.map(e => (
                <Route key={v4()} exact={true} path={`${url === "/" ? "" : url}/${e.route}`} >
                  <Second />
                </Route>))}
            </Routes>
          </div>
        </div>
      </div></>
  );
}

export default Home;
