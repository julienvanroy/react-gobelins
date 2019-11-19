import React from 'react';
import {Link} from "react-router-dom";

export default class TableBody extends React.Component {
    constructor (props) {
        super(props)
    }

    render(){
        return(
        
            <tr>
                <td className="text-left">{this.props.rank}</td>
                <td className="text-center">{this.props.name}</td>
                <td className="text-center">{this.props.symbol}</td>
                <td className="text-center">{this.props.type}</td>
                <td className="text-right"> <Link className="btn btn-primary animation-on-hover" to={this.props.id}>Accéder à la page</Link> </td>
            </tr>
        
        )
    }
}