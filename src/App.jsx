import React, {useContext} from "react";
import "@material-tailwind/react/tailwind.css";

// importing react router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// importing firebase context
import { AuthProvider } from "./context/firebase";

// importing pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import { ThemeContext } from "./Theme";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <AuthProvider>
      <div className={`App ${theme}`}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/doc/:id" component={Editor} />
            <Route path="/login" component={Login} />
            <Login />
          </Switch>
        </Router>
      </div>
    </AuthProvider>

  );
};

export default App;
