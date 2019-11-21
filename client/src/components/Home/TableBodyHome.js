import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const TableBodyHome = (props) => {
  return (
    <tr>
      <td className="text-left">{props.rank}</td>
      <td className="text-center">{props.name}</td>
      <td className="text-center">{props.symbol}</td>
      <td className="text-center">{props.type}</td>
      <td className="text-right"><button className="btn btn-icon"><i className="fas fa-heart"></i></button></td>
      <td className="text-right"><Link className="btn btn-primary animation-on-hover" to={props.id}>Accéder à la page</Link></td>
    </tr>
  )
};

export default TableBodyHome;
