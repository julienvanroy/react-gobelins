import React from 'react';

const Team = ({id, position}) => {
  return (
    <div className="col-md-4">
      <div className="card-chart card">
        <div className="card-header">
          <h3 className="card-title">
            {id}
          </h3>
          <h4>{position}</h4>
        </div>
      </div>
    </div>
  )
}

export default Team;
