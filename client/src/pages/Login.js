import React from 'react';
import axios from 'axios'
import {Route, Redirect} from 'react-router-dom';

const HTTP_SERVER_PORT = 'http://localhost:8081/'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.checkConnexion = () => console.log("no connexion");
    if (this.props.checkConnexion) {
      this.checkConnexion = this.props.checkConnexion
    }
    this.state = {
      user: Login.getUser(),
      authenticated: false,
    };
    this.login();
  }

  logout() {
    sessionStorage.clear();
    this.setState({
      user: Login.getUser(),
      authenticated: false,
    });
    this.checkConnexion(false);
  };

  login() {
    if (this.state.user) {
      axios.post(HTTP_SERVER_PORT + 'login', this.state.user)
        .then(res => {
          if (res.data.isConnected) {
            this.setUser(this.state.user);
            this.setState({authenticated: true});
            this.checkConnexion(true);
          }
        })
    }
  };

  signUp() {
    axios.post(HTTP_SERVER_PORT + 'signUp', this.state.user)
      .then(res => {
        if (res.data.isConnected) this.login()
      });
  };

  setUser() {
    sessionStorage.setItem('username', this.state.user.username);
    sessionStorage.setItem('password', this.state.user.password);
  };

  // --- static methods ---
  static getUser() {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('password')) {
      return ({
        username: sessionStorage.getItem('username'),
        password: sessionStorage.getItem('password')
      })
    }
    return null;
  };

  // --- form methods
  handleForm(e) {
    e.preventDefault();
    this.login();
  };

  setUsername(e) {
    const user = this.state.user || {};
    user.username = e.target.value;
    this.setState({user: user})
  }

  setPassword(e) {
    const user = this.state.user || {};
    user.password = e.target.value;
    this.setState({user: user})
  }

  render() {
    if (this.state.user && this.state.authenticated) {
      return (
        <Redirect to="/"/>
      );
    } else {
      return (
        <div className="row">
          <div className="col-md-7 center-block">
            <div className="card">
              <div className="card-header">
                <h1 className="title">Connexion</h1>
              </div>
              <div className="card-body">
                <form className="connexion" onSubmit={e => this.handleForm(e)}>
                  <div className="form-group">
                    <label>Identifiant :</label>
                    <input type="text" id="username" className="form-control"
                           onChange={e => this.setUsername(e)}/>
                  </div>
                  <div className="form-group">
                    <label>Mot de passe:</label>
                    <input type="password" id="password" name="password" className="form-control"
                           onChange={e => this.setPassword(e)}/>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-fill btn-primary animation-on-hover center-block" name="login">Connexion</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export const
  ProtectedRoute = (props) => {
    if (Login.getUser())
      return (<Route exact={props.exact} path={props.path}
                     component={props.component}/>);
    return null;
  };

export default Login;
