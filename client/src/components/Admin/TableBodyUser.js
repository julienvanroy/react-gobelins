import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import ReactImageFallback from "react-image-fallback";

const TableBodyUser = (props) => {
  return (
    <tr>
      <td className="text-center">
        <ReactImageFallback
          src={props.avatar}
          fallbackImage="assets/img/default-avatar.jpg"
          width="60"
          height="60"
          />
      </td>
      <td className="text-center">{props.username}</td>
      <td className="text-center"><Button color="success">
        Edit
      </Button>
        <Button color="danger">
          Delete
        </Button></td>
    </tr>
  )
};

export default TableBodyUser;
