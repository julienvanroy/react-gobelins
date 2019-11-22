import React from 'react';
import {Link} from "react-router-dom";
import Heart from "./Heart";

const TableBodyHome = (props) => {
  return (
    <tr>
      <td className="text-left">{props.rank}</td>
      <td className="text-center">{props.name}</td>
      <td className="text-center">{props.symbol}</td>
      <td className="text-center">{props.type}</td>
        <Heart/>
      <td className="text-right"><Link
        className="btn btn-primary animation-on-hover" to={props.id}>Accéder à
        la page</Link></td>
    </tr>
  )
};

export default TableBodyHome;
