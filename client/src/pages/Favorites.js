import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'reactstrap';
import TableBodyHome from '../components/Home/TableBodyHome'
import TableHeadHome from '../components/Home/TableHeadHome'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as HomeActions from '../actions/home';
import * as FavoritesActions from '../actions/favorites';

const Favorites = ({home, login, favorites, actionsHome, actionsFavorites}) => {
  const [loadCoins, setLoadCoins] = useState(false)
  const [loadFavs, setLoadFavs] = useState(false)

  useEffect(() => {
    if (loadCoins === false) {
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
    if (loadFavs === false && loadCoins===true) {
      if (favorites.favs.length <= 0) {
        axios.get(`http://localhost:8081/auth/users/${login.user.username}`, {headers: login.user})
          .then(res => {
            actionsFavorites.setFavs(res.data)
          }).finally(() => setLoadFavs(true))
      } else {
        setLoadFavs(true);
      }
    }
  }, [loadCoins, loadFavs]);

  console.log(favorites)

  return (
    <Table responsive>
      <thead>
      <TableHeadHome/>
      </thead>
      <tbody>
      {favorites.favs.length > 0 && favorites.favs.map((coin, index) => <TableBodyHome
        key={index} {...coin} />)}
      </tbody>
    </Table>
  );
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
