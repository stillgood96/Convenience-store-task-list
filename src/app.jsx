import styles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./components/index/index";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/task"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
