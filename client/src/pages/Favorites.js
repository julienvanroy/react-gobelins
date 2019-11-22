import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'reactstrap';
import TableBodyHome from '../components/Home/TableBodyHome'
import TableHeadHome from '../components/Home/TableHeadHome'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as HomeActions from '../actions/home';
import * as FavoritesActions from '../actions/favorites';
import Error from "./Error";

const Favorites = ({home, login, favorites, actionsHome, actionsFavorites}) => {
  const [loadCoins, setLoadCoins] = useState(false)
  const [loadFavs, setLoadFavs] = useState(false)

  useEffect(() => {
    if (login.authenticated === true && loadCoins === false) {
      if (home.coins.length <= 0) {
        axios.get('https://api.coinpaprika.com/v1/coins')
          .then(res => {
            actionsHome.setCoins(res.data.filter(coin => (coin.is_active === true) && (coin.rank !== 0)))
          }).finally(() => setLoadCoins(true))
      } else {
        setLoadCoins(true);
      }
    }
  }, [loadCoins]);

  useEffect(() => {
    if (login.authenticated === true && loadCoins === true && loadFavs === false) {
      axios.get(`http://localhost:8081/auth/users/${login.user.username}`, {headers: login.user})
        .then(res => {
          let favorites = res.data.favorites
          actionsFavorites.setFavs(home.coins.filter((coin) => favorites.indexOf(coin.id) !== -1))
        }).finally(() => setLoadFavs(true))
    }
  }, [loadCoins, loadFavs]);

  if (login.authenticated === false) {
    return (
      <Error title="401"
             message="Oh Oh Oh, calma... tu n'as pas accès à cette page"/>
    );
  } else {
    return (
      <Table responsive>
        <thead>
        <TableHeadHome/>
        </thead>
        <tbody>
        {loadFavs === true && favorites.favs.map((coin, index) => <TableBodyHome
          key={index} {...coin} />)}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  home: state.home,
  login: state.login,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  actionsHome: bindActionCreators(HomeActions, dispatch),
  actionsFavorites: bindActionCreators(FavoritesActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);
