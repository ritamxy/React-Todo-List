import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faTrashAlt,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faBook, faTrashAlt, faPencilAlt);

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
