import React from 'react';
import {Link} from "react-router-dom";

const TableHadUser = (props) => {
    return(
      <tr>
        <th className="text-center">Avatar</th>
        <th className="text-center">Username</th>
        <th className="text-center">Nom</th>
        <th className="text-center">Prénom</th>
        <th className="text-center">Action</th>
      </tr>
    )
};

export default TableHadUser;
