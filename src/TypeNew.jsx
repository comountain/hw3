import React from "react";

class TypeNew extends React.Component{
    handleAdd(e) {
        e.preventDefault();
        var inputDom = this.refs.inputnew.getDOMNode();
        var newthing = inputDom.value.trim();
        var rows = this.props.todo;
        if (newthing !== '') {
            rows.push(newthing);
            this.props.onAdd(rows);
        }
        inputDom.value = '';
    }
    render() {
        return (
            <form onSubmit={this.handleAdd}>
                <input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo" autoComplete="off" />
            </form>
        );
    }
}

export default TypeNew