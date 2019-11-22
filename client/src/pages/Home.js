import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'reactstrap';
import TableBodyHome from '../components/Home/TableBodyHome'
import TableHeadHome from '../components/Home/TableHeadHome'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as HomeActions from '../actions/home';

const Home = ({value, actions}) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load === false) {
      setLoad(true);
      axios.get('https://api.coinpaprika.com/v1/coins')
        .then(res => {
          actions.setCoins(res.data.filter(coin => (coin.is_active === true) && (coin.rank !== 0)))
        })
    }
  }, [load]);

  return (
    <Table responsive>
      <thead>
      <TableHeadHome/>
      </thead>
      <tbody>
      {value.coins.length > 0 && value.coins.map((coin, index) => <TableBodyHome
        key={index} {...coin} />)}
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => ({
  value: state.home,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(HomeActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
