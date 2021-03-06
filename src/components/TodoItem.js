import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <FontAwesomeIcon icon="trash-alt" />
          </span>
          <span className="mx-2 text-success" onClick={handleEdit}>
            <FontAwesomeIcon icon="pencil-alt" />
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
