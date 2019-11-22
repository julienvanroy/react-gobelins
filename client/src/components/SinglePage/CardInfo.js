import React from 'react';

const CardInfo = ({description}) => {
   return (
      <div className="row col-12">
        <div className="card-chart card col-md-8">
          <div className="card-header">
            <h3 className="card-title">
              Description
            </h3>

            <p>{description}</p>
          </div>
        </div>
      </div>
    )
}

export default CardInfo;
