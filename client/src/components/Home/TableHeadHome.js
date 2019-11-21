import React from 'react';
import {Link} from "react-router-dom";

const TableHeadHome = (props) => {
    return(
      <tr>
            <th className="text-left">Rank</th>
            <th className="text-center">Name</th>
            <th className="text-center">Symbol</th>
            <th className="text-right">Type</th>
        </tr>
    )
};

export default TableHeadHome;
