import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="*" exact={true}>
            <NotFound />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
