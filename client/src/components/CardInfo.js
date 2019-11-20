import React from 'react';

export default class CardInfo extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="col-lg-4">
                    <div className="card-chart card">
                        <div className="card-header">
                            <h3 className="card-title">
                                Description
                            </h3>
                            
                        <p>{this.props.description}</p>
                        </div>
                    </div>
            </div>
        )
    }
}