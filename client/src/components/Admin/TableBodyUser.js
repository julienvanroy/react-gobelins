import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const TableBodyUser = (props) => {
  return (
    <tr>
      <td className="text-left">{props.avatar}</td>
      <td className="text-center">{props.username}</td>
      <td className="text-center">{props.firstname}</td>
      <td className="text-right">{props.lastname}</td>
      <td className="text-right"><Button color="success">
        Edit
      </Button>
        <Button color="danger">
          Delete
        </Button></td>
    </tr>
  )
};

export default TableBodyUser;
