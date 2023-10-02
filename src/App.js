import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";
import NotFound from "./pages/notfound/NotFound";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact={true} path="/" component={Home} />
          <Route path="/:id" component={Home} />
          <Route path="*" exact={true} component={NotFound}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
