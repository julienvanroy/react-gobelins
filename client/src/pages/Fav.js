import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Button,Table} from 'reactstrap';
import TableBodyHome from '../components/Home/TableBodyHome'
import TableHeadHome from '../components/Home/TableHeadHome'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as FavActions from '../actions/fav';

const Fav = ({home, fav, actions}) => {
    const [loadCoins, setLoadCoins] = useState(false)
    const [loadFavs, setLoadFavs] = useState(false)


    useEffect( () => {
      if(loadCoins === false) {
        if(home.coins.length <= 0) {
          axios.get('https://api.coinpaprika.com/v1/coins')
            .then(res => {
              actions.setCoins(res.data.filter(coin => (coin.is_active === true) && (coin.rank !== 0)))
            }).finally(() => setLoadCoins(true))
        } else {
          setLoadCoins(true);
        }
      }
      if(loadFavs === false) {
        setLoadFavs(true);
        if(home.coins.length <= 0) {
          axios.get('https://api.coinpaprika.com/v1/coins')
            .then(res => {
              actions.setCoins(res.data.filter(coin => (coin.is_active === true) && (coin.rank !== 0)))
            })
        }
      }
    });

    return (
        <Table responsive>
    <thead>
        <TableHeadHome />
    </thead>
            <tbody>
                { fav.favs.length > 0 && fav.favs.map((coin,index) => <TableBodyHome key={index} {...coin} />)}
            </tbody>
        </Table>
    );
  }

const mapStateToProps = state => ({
    home: state.home,
    fav: state.fav
  });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(FavActions, dispatch),
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Fav);
