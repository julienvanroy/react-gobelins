import React from 'react';
import Chart from '../components/Chart'
import CardInfo from '../components/CardInfo'
import Team from '../components/Team'
import Button from '../components/Buttons'
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
            date: `${new Date().getFullYear()}-${new Date().getMonth()}-${parseInt(new Date().getDate(), 10) - 4}`,
            toggleHeure: '1',
            'options': "1"
            //chartDate: `${parseInt(new Date().getDate(), 10) - 1}${new Date().getMonth()}${new Date().getFullYear()}}`
         }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        const value =(parseInt( new Date().getDate(), 10) - parseInt(event.target.value,10))
        const day = value < 10 ? `0${new Date().getDate()}` : new Date().getDate();

        this.setState({
            loading: false,
            date: `${new Date().getFullYear()}-${new Date().getMonth()}-${day}`,
            options: event.target.value,
        },() => {
            console.log(this.state.date)
            console.log(this.state.options)
        this.changeApi() })
    }
    
    async changeApi () {
        await axios.get(`https://api.coinpaprika.com/v1/tickers/${this.state.id}/historical?start=${this.state.date}&interval=${this.state.options}d`)
        .then(res => {           
           this.setState({chartData: res.data})
        }).finally(() => {
            console.log('cc')
            this.setState({loading: true})
        })
    }

    async componentDidMount () {
        await axios.get(`https://api.coinpaprika.com/v1/tickers/${this.state.id}/historical?start=2019-11-06&interval=7d`)
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

    render() {
       
        if( this.state.loading === true && this.state.loadingHistorique === true ){
            const team = this.state.historique.team.map((team, index) =>  <Team  key={index} {...team}  />)
           // console.log(this.state.chartData)
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
                                            <Button options={this.state.options} handleChange={this.handleChange}/>
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

