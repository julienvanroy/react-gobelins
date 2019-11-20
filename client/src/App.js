import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SinglePage from "./pages/SinglePage";
const App = () => {
  return (
      <BrowserRouter>
          <Sidebar />
          <div className="main-panel" data="blue">
            <NavBar />
            <main role="main" className="content">
              <Route render={({location}) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route exact={true} path='/' component={Home}/>
                      <Route exact={true} path='/login' component={Login}/>
                      <Route exact={true} path='/account' component={Account}/>
                      <Route exact={true} path="/:id" component={SinglePage}/>
                      <Route path="*" component={Error}/>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}/>
            </main>
            <Footer />
          </div>
      </BrowserRouter>
  );
};

export default App;
