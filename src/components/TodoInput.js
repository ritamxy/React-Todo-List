import React, { Component } from "react";

class TodoList extends Component {
  state = {};
  render() {
    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white "></div>
              <i className="fas fa-book" />
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            add item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoList;
