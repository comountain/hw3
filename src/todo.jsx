import  React from 'react';
import List from './todoList';
import TypeNew from './TypeNew';
 
class TodoList extends React.Component{
         constructor(props){
           super(props);
           this.state={todolist:[]}
         }
         getInitialState(){
              return {
                  todolist: []
              };
          }
         handleChange(rows) {
             this.setState({
                 todolist: rows
             });
         }
         render() {
             return (
                 <div>
                     <TypeNew onAdd={this.handleChange} todo={this.state.todolist} />
                     <List onDel={this.handleChange} todo={this.state.todolist} />
                 </div>
             );
         }
     }
 
export default TodoList