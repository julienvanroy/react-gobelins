import React from 'react';

const FormUser = ({handleForm, setUsername, setPassword, value}) => {
  return (
    <form className="connexion" onSubmit={e => handleForm(e)}>
      <div className="card-body">
        <div className="form-group">
          <label>Identifiant :</label>
          <input type="text" id="username" className="form-control"
                 onChange={e => setUsername(e)}/>
        </div>
        <div className="form-group">
          <label>Mot de passe:</label>
          <input type="password" id="password" name="password"
                 className="form-control"
                 onChange={e => setPassword(e)}/>
        </div>
        {value.hasError === true &&
        <p className="text-center">{value.errorMessage}</p>}
      </div>
      <div className="card-footer">
        <button type="submit"
                className="btn btn-fill btn-primary animation-on-hover center-block"
                name="login">Connexion
        </button>
      </div>
    </form>
  )
}

export default FormUser;
