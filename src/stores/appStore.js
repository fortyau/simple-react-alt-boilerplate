import alt from '../alt';
import AppActions from '../actions/appActions'

class AppStore {
  constructor() {
    this.bindListeners({
      handleUpdateTodo: AppActions.UPDATE_TODO
    });

    this.todos = [];
  }

  handleUpdateTodo(todo) {
    this.todos.push(todo);
  }
}

module.exports = alt.createStore(AppStore, 'AppStore');
