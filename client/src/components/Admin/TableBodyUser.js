import React from 'react';
import {Button} from "reactstrap";
import ReactImageFallback from "react-image-fallback";

const TableBodyUser = ({username, avatar, connected, removeUser}) => {
  return (
    <tr>
      <td className="text-center">
        <ReactImageFallback
          src={avatar}
          fallbackImage="assets/img/default-avatar.jpg"
          width="60"
          height="60"
        />
      </td>
      <td className="text-center">{username}</td>
      <td className="text-center">
        {connected !== username &&
        <Button color="danger" onClick={() => removeUser()}>
          Delete
        </Button>}
      </td>
    </tr>
  )
};

export default TableBodyUser;
