import Landing from "./components/Landing/Landing";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Gallery from "./components/Gallery/Gallery";
import Posts from "./components/Posts/Posts";
import Todo from "./components/Todo/Todo";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/gallery/:id" component={Gallery} />
        <Route exact path="/posts/:id" component={Posts} />
        <Route exact path="/todo/:id" component={Todo} />
      </Switch>
    </div>
  );
}

export default App;
