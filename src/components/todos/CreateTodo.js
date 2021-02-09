// ./src/components/todos/CreateTodo.js
 
...
 
handleSubmit = event => {
  event.preventDefault();
  this.props.addTodo(this.state)
  this.setState({
    text: '',
  })
}
 
 
...