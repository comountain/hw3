import React from "react"

class List extends React.Component{
  handleDel(e) {
      var delIndex = e.target.getAttribute('data-key');
      this.props.todo.splice(delIndex, 1);
      this.props.onDel(this.props.todo);
  }
  render() {
      return (
          <ul id="todo-list">
          {
              this.props.todo.map(function (item, i) {
                  return (
                      <li>
                          <label>{item}</label>
                          <button className="destroy" onClick={this.handleDel} data-key={i}>delete</button>
                      </li>
                  );
              }.bind(this)) 
          }
          </ul>
      );
  }
};
 
export default List