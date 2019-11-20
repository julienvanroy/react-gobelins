import React from 'react';
import axios from 'axios';
import {Button,Table} from 'reactstrap';
import TableBody from '../components/TableBody'

export default class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            coins : []
         }
    }

    componentDidMount () {
        axios.get('https://api.coinpaprika.com/v1/coins')
        .then(res => {
            const coins = res.data;
            this.setState({coins})
            console.log();
        }).finally( () => {
            console.log(this.state.coins);
            this.setState({coins: this.state.coins.filter(coin => coin.is_active === true)})
        })
    }


    render() {
        const tableau = this.state.coins.map((coins, index) => <TableBody key={index} {...coins} /> )
        return (

<Table responsive>
    <thead>
        <tr>
            <th className="text-left">Rank</th>
            <th className="text-center">Name</th>
            <th className="text-center">Symbol</th>
            <th className="text-right">Type</th>
        </tr>
    </thead>
    <tbody>

        {tableau}
    </tbody>
</Table>
        );
    };
}
