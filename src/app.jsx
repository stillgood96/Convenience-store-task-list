import styles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components/index/index";
import Task from "./components/task/task";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
