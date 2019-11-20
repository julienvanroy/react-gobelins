import React from 'react';
import Chart from '../components/Chart'
import CardInfo from '../components/CardInfo'
import Team from '../components/Team'
import axios from 'axios';
import { DocumentQuery } from 'mongoose';


export default class SinglePage extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            chartData: [],
            historique: [],
            loading: false,
            loadingHistorique: false,
            id: this.props.match.params.id,
            date: `${new Date().getFullYear()}-${new Date().getMonth()}-${parseInt(new Date().getDate(), 10) - 1}`
         }
    }

    async componentDidMount () {
        await axios.get(`https://api.coinpaprika.com/v1/tickers/${this.state.id}/historical?start=${this.state.date}&interval=24h`)
        .then(res => {           
           this.setState({chartData: res.data})
        }).finally(() => {
            this.setState({loading: true})
        })

        await axios.get(`https://api.coinpaprika.com/v1/coins/${this.state.id}`)
        .then(res => {           
           this.setState({historique: res.data})
        }).finally(() => {
            this.setState({loadingHistorique: true})
        })
    }


    handleClick1 = () => {
        console.log('hey')

    }  

    render() {
       
        if( this.state.loading === true && this.state.loadingHistorique === true ){
            const team = this.state.historique.team.map((team, index) =>  <Team  key={index} {...team}  />)
            console.log(team)
            return(
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="card-chart card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="text-left col-sm-6">
                                        <h5 className="card-category">Rank : {this.state.historique.rank}</h5>
                                        <h2 className="card-title">{this.state.historique.name}</h2>
                                    </div>
                                    <div className="col-sm-6">
                                        <div data-toggle="buttons" role="group" className="btn-group-toggle float-right btn-group">
                                            <label id="0" className="btn-simple active btn btn-info btn-sm">
                                            <input className="d-none" name="options" type="radio" />
                                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">24h</span>
                                                <span className="d-block d-sm-none">
                                                    <i className="tim-icons icon-single-02"></i>
                                                </span>
                                            </label>
                                            <label id="1" className="btn-simple btn btn-info btn-sm" onClick={this.handleClick1}>
                                            <input className="d-none" name="options" type="radio" />
                                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">1j</span>
                                                <span className="d-block d-sm-none">
                                                    <i className="tim-icons icon-gift-2"></i>
                                                </span>
                                            </label>
                                                <label id="2" className="btn-simple btn btn-info btn-sm">
                                                    <input className="d-none" name="options" type="radio" />
                                                    <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">4j</span>
                                                    <span className="d-block d-sm-none">
                                                        <i className="tim-icons icon-tap-02"></i>
                                                    </span>
                                                </label>
                                        </div>
                                    </div>
                            </div>
                        </div>
                            <div className="card-body">
                                <Chart chartData={this.state.chartData} />
                            </div>
                        </div>
                    </div>
                </div>
                    <CardInfo  description={this.state.historique.description} />
                    <div className="card_description">
                        {team}
                    </div>
        </div>    
       
            )
        }else return null
    }
}

