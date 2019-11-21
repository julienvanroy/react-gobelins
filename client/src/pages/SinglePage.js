import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Table} from 'reactstrap';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as SingleActions from '../actions/single';
import Chart from "../components/Chart";
import CardInfo from "../components/CardInfo";
import Team from "../components/Team";
import ButtonHistorique from "../components/ButtonHistorique";

const SinglePage = ({value, actions, match}) => {
  const [loadChartData, setLoadChartData] = useState(false);
  const [loadHistorique, setLoadHistorique] = useState(false);
  const [changeChartData, setChangeChartData] = useState(false);
  const [id, setId] = useState(match.params.id);
  const [options, setOptions] = useState('1');
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (loadChartData === false) {
      axios.get(`https://api.coinpaprika.com/v1/tickers/${id}/historical?start=2019-11-06&interval=7d`)
        .then(res => {
          actions.setChartData(res.data)
        }).finally(() => {
        setLoadChartData(true)
      })
    }
    if (loadHistorique === false) {
      axios.get(`https://api.coinpaprika.com/v1/coins/${id}`)
        .then(res => {
          actions.setHistorique(res.data)
        }).finally(() => {
        setLoadHistorique(true)
      })
    }
  }, [loadChartData, loadHistorique]);

  const handleChange = (event) => {
    const value = (parseInt(new Date().getDate(), 10) - parseInt(event.target.value, 10))
    const day = value < 10 ? `0${new Date().getDate()}` : new Date().getDate();
    setDate(`${new Date().getFullYear()}-${new Date().getMonth()}-${day}`);
    setOptions(event.target.value)
    setChangeChartData(true);
  };

  useEffect( () => {
    if(changeChartData === true) {
      axios.get(`https://api.coinpaprika.com/v1/tickers/${id}/historical?start=${date}&interval=${options}d`)
        .then(res => {
          actions.setChartData(res.data);
        }).finally(() => {
        setChangeChartData(false);
      })
    }
  },[changeChartData,date, options])


  if (loadChartData === true && loadHistorique === true) {
    const team = value.historique.team.map((team, index) => <Team
      key={index} {...team}  />)
    return (
      <div className="row">
        <div className="col-12">
          <div className="card-chart card">
            <div className="card-header">
              <div className="row">
                <div className="text-left col-sm-6">
                  <h5 className="card-category">Rank
                    : {value.historique.rank}</h5>
                  <h2 className="card-title">{value.historique.name}</h2>
                </div>
                <div className="col-sm-6">
                  <div data-toggle="buttons" role="group"
                       className="btn-group-toggle float-right btn-group">
                    <ButtonHistorique options={options}
                            handleChange={handleChange}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <Chart chartData={value.chartData}/>
            </div>
          </div>
        </div>
        <CardInfo description={value.historique.description}/>
        <div className="card_description">
          {team}
        </div>
      </div>
    )
  } else return null
}

const mapStateToProps = state => ({
  value: state.single,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(SingleActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SinglePage);
