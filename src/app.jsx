import styles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components/index/index";
import Task from "./components/task/task";
import Edit from "./components/edit/edit";
import Login from "./login/login";

function App({ taskLists }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Index taskLists={taskLists} />
          </Route>
          <Route path="/task">
            <Task taskLists={taskLists} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
