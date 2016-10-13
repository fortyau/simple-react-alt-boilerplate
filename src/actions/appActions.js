import alt from '../alt';

class AppActions {
  updateTodo(text) {
    return { text }
  }
}

module.exports = alt.createActions(AppActions);
