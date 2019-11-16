import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Home from "./pages/Home";
import Error from "./pages/Error";

const App = () => {
  return (
      <BrowserRouter>
        <div>
          <header className="header">
          </header>
          <main role="main">
            <Route render={({location}) => (
                <TransitionGroup>
                  <CSSTransition
                      key={location.key}
                      timeout={450}
                      classNames="fade"
                  >
                    <Switch location={location}>
                      <Route exact={true} path='/' component={Home}/>
                      <Route path="*" component={Error}/>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
            )}/>
          </main>
          <footer className="footer">
          </footer>
        </div>
      </BrowserRouter>
  );
};

export default App;
