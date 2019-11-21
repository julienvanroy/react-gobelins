import React from 'react';

export default class Team extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="col-lg-4">
                <div className="card-chart card">
                    <div className="card-header">
                        <h3 className="card-title">
                        {this.props.id}
                        </h3>
                        <h4>{this.props.position}</h4>
                    </div>
                </div>
            </div>
        )
    }
}